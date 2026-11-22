// ============================================================
// منصة مَهارة (Skill-Swap) - وحدة التحكم الموحدة (App Controller)
// كائن تحكم نظيف ومختصر وخالٍ من الأخطاء يربط الواجهة بالمتجر والترجمة
// ============================================================

const app = {
  activeTab: 'dashboard',
  catFilter: 'all',
  sessFilter: 'all',
  searchQuery: '',
  bookingId: null,
  roomId: null,
  timer: null,
  seconds: 0,
  isMuted: false,
  isCamOff: false,
  anim: null,
  activeStream: null,
  activeInstructorId: null,
  chatFilterQuery: '',

  init() {
    if (typeof i18n !== 'undefined') i18n.init();
    if (typeof store !== 'undefined') {
      store.subscribe(() => this.render());
    }
    window.addEventListener('languageChanged', () => this.render());

    // التحكم في القائمة الجانبية للشاشات الصغيرة
    const toggleSidebar = (open) => {
      const sidebar = document.getElementById('sidebar');
      const overlay = document.getElementById('sidebar-overlay');
      if (sidebar) sidebar.classList.toggle('mobile-open', open);
      if (overlay) overlay.classList.toggle('hidden', !open);
    };
    document.getElementById('mobile-menu-btn')?.addEventListener('click', () => toggleSidebar(true));
    document.getElementById('close-sidebar-btn')?.addEventListener('click', () => toggleSidebar(false));
    document.getElementById('sidebar-overlay')?.addEventListener('click', () => toggleSidebar(false));

    this.render();
  },

  setTab(name) {
    this.activeTab = name;
    document.querySelectorAll('.tab-pane').forEach(el => el.classList.add('hidden'));
    document.getElementById(`tab-${name}`)?.classList.remove('hidden');

    document.querySelectorAll('[data-tab-nav]').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-tab-nav') === name);
    });

    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebar-overlay');
    if (sidebar) sidebar.classList.remove('mobile-open');
    if (overlay) overlay.classList.add('hidden');

    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.render();
  },

  render() {
    if (typeof store === 'undefined') return;
    const u = store.user;
    const activeSess = store.sessions.filter(s => s.status === 'pending' || s.status === 'confirmed');
    const compSess = store.sessions.filter(s => s.status === 'completed');

    ['top-balance-val', 'dash-avail-hours', 'kpi-available', 'ledger-bal-val'].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.textContent = u.balance;
    });

    ['top-escrow-val', 'kpi-escrowed', 'ledger-escrow-val'].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.textContent = u.escrowed;
    });

    const dashEscrow = document.getElementById('dash-escrow-hours');
    if (dashEscrow) dashEscrow.textContent = `${u.escrowed} ${i18n.t('timeHour')}`;

    const ledgerConsumed = document.getElementById('ledger-consumed-val');
    if (ledgerConsumed) ledgerConsumed.textContent = u.consumed;

    const kActive = document.getElementById('kpi-active');
    const kComp = document.getElementById('kpi-completed');
    if (kActive) kActive.textContent = activeSess.length;
    if (kComp) kComp.textContent = compSess.length;

    const bSkills = document.getElementById('badge-skills-count');
    const bSess = document.getElementById('badge-sessions-count');
    const bMsgs = document.getElementById('badge-messages-count');
    if (bSkills) bSkills.textContent = store.skills.length;
    if (bSess) bSess.textContent = activeSess.length;
    if (bMsgs) {
      const totalUnread = (store.conversations || []).reduce((acc, c) => acc + (c.unread || 0), 0);
      bMsgs.textContent = totalUnread || store.conversations.length;
    }

    this.renderSkills();
    this.renderSessions();
    this.renderLedger();
    this.renderConversations();
    if (window.lucide) lucide.createIcons();
  },

  renderSkills() {
    const grid = document.getElementById('skills-grid');
    if (!grid) return;

    const query = (document.getElementById('skills-search-input')?.value || '').toLowerCase().trim();
    let list = store.skills;
    if (this.catFilter !== 'all') list = list.filter(s => s.category === this.catFilter);
    if (query) {
      list = list.filter(s =>
        i18n.localize(s.title).toLowerCase().includes(query) ||
        i18n.localize(s.description).toLowerCase().includes(query) ||
        i18n.localize(s.instructor.name).toLowerCase().includes(query)
      );
    }

    grid.innerHTML = list.map(s => `
      <div class="glass-card glass-card-hover rounded-3xl overflow-hidden flex flex-col justify-between border border-stone-200/80 bg-white">
        <div class="relative h-44 w-full bg-stone-100 overflow-hidden">
          <img src="${s.image}" alt="${i18n.localize(s.title)}" class="w-full h-full object-cover">
          <div class="absolute inset-0 bg-gradient-to-t from-black/65 to-transparent"></div>
          <span class="absolute top-3 start-3 px-3 py-1 rounded-full text-[11px] font-bold bg-white/95 text-stone-800 shadow-sm backdrop-blur-md">
            ${s.category}
          </span>
          <div class="absolute bottom-3 inset-x-3 flex items-center justify-between text-white text-xs">
            <span class="flex items-center gap-1 font-bold"><i data-lucide="star" class="w-3.5 h-3.5 text-amber-400 fill-amber-400"></i> ${s.rating}</span>
            <span class="flex items-center gap-1 bg-black/50 px-2.5 py-1 rounded-lg font-bold text-[#A7F3D0]">
              <i data-lucide="clock" class="w-3.5 h-3.5"></i> ${s.hours} ${i18n.t('timeHour')}
            </span>
          </div>
        </div>
        <div class="p-5 flex-1 flex flex-col justify-between">
          <div>
            <div class="flex items-center gap-2 mb-2">
              <img src="${s.instructor.avatar}" class="w-6 h-6 rounded-full object-cover">
              <span class="text-xs text-stone-600 font-medium">${i18n.localize(s.instructor.name)}</span>
            </div>
            <h3 class="font-bold text-stone-900 text-sm mb-1.5 leading-snug line-clamp-1">${i18n.localize(s.title)}</h3>
            <p class="text-stone-500 text-xs line-clamp-2 leading-relaxed mb-4">${i18n.localize(s.description)}</p>
          </div>
          
          <div class="space-y-2">
            <button onclick="app.openBookingModal('${s.id}')" class="w-full py-2.5 rounded-2xl bg-[#1B4D3E] text-white text-xs font-bold hover:bg-[#12382D] transition shadow-md flex items-center justify-center gap-1.5">
              <i data-lucide="calendar-plus" class="w-4 h-4 text-[#A7F3D0]"></i>
              <span>${i18n.t('bookBtn')}</span>
            </button>
            <div class="flex items-center gap-2">
              <button onclick="app.openChatWithInstructor('${s.instructor.id}')" class="flex-1 py-2 rounded-2xl border border-emerald-300 bg-emerald-50/60 text-[#1B4D3E] text-xs font-bold hover:bg-emerald-100/70 transition flex items-center justify-center gap-1.5" title="محادثة مباشرة مع المدرب">
                <i data-lucide="message-square" class="w-3.5 h-3.5 text-emerald-700"></i>
                <span>${i18n.t('chatBtn')}</span>
              </button>
              <button onclick="app.shareSkillWhatsApp('${s.id}')" class="flex-1 py-2 rounded-2xl border border-stone-200 text-stone-600 text-xs font-semibold hover:bg-stone-50 transition flex items-center justify-center gap-1.5" title="مشاركة عبر واتساب">
                <i data-lucide="share-2" class="w-3.5 h-3.5 text-green-600"></i>
                <span>واتساب</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    `).join('') || `<div class="col-span-full py-12 text-center text-stone-400 text-xs">لا توجد نتائج مطابقة للبحث.</div>`;
  },

  renderConversations() {
    const listEl = document.getElementById('conversations-list');
    const headerEl = document.getElementById('active-chat-header');
    const msgsEl = document.getElementById('chat-messages-container');
    if (!listEl) return;

    const convs = store.conversations || [];
    if (!this.activeInstructorId && convs.length > 0) {
      this.activeInstructorId = convs[0].instructorId;
    }

    const filtered = this.chatFilterQuery
      ? convs.filter(c => i18n.localize(c.instructorName).toLowerCase().includes(this.chatFilterQuery.toLowerCase()))
      : convs;

    listEl.innerHTML = filtered.map(c => {
      const active = c.instructorId === this.activeInstructorId;
      const lastMsg = c.messages && c.messages[c.messages.length - 1];
      const timeStr = lastMsg ? new Date(lastMsg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : '';
      return `
        <div onclick="app.selectConversation('${c.instructorId}')" class="p-3 flex items-center gap-3 cursor-pointer transition ${active ? 'bg-emerald-50/70 border-s-4 border-[#1B4D3E]' : 'hover:bg-stone-50'}">
          <div class="relative shrink-0">
            <img src="${c.avatar}" class="w-10 h-10 rounded-full object-cover">
            <span class="absolute bottom-0 end-0 w-2.5 h-2.5 bg-emerald-500 rounded-full ring-2 ring-white"></span>
          </div>
          <div class="flex-1 min-w-0 text-start">
            <div class="flex items-center justify-between mb-0.5">
              <span class="font-bold text-xs text-stone-900 truncate">${i18n.localize(c.instructorName)}</span>
              <span class="text-[10px] text-stone-400">${timeStr}</span>
            </div>
            <div class="text-[11px] text-stone-500 truncate">${lastMsg ? lastMsg.text : ''}</div>
          </div>
          ${c.unread ? `<span class="w-4 h-4 bg-[#1B4D3E] text-white text-[9px] font-bold rounded-full flex items-center justify-center shrink-0">${c.unread}</span>` : ''}
        </div>
      `;
    }).join('') || `<div class="p-6 text-center text-xs text-stone-400">لا توجد محادثات.</div>`;

    // Active Chat Pane
    const activeConv = convs.find(c => c.instructorId === this.activeInstructorId);
    if (!activeConv) {
      if (headerEl) headerEl.innerHTML = `<span class="text-xs text-stone-400">اختر محادثة لبدء الدردشة</span>`;
      if (msgsEl) msgsEl.innerHTML = '';
      return;
    }

    if (headerEl) {
      headerEl.innerHTML = `
        <div class="flex items-center gap-3">
          <div class="relative">
            <img src="${activeConv.avatar}" class="w-9 h-9 rounded-full object-cover">
            <span class="absolute bottom-0 end-0 w-2.5 h-2.5 bg-emerald-500 rounded-full ring-2 ring-white"></span>
          </div>
          <div>
            <h4 class="font-bold text-stone-900 text-xs">${i18n.localize(activeConv.instructorName)}</h4>
            <span class="text-[10px] text-emerald-700 font-semibold flex items-center gap-1">
              <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> متصل الآن • ${i18n.localize(activeConv.skillTitle)}
            </span>
          </div>
        </div>
        <button onclick="app.setTab('skills')" class="px-3 py-1.5 rounded-xl border border-stone-200 text-stone-600 hover:bg-stone-50 text-[11px] font-semibold flex items-center gap-1">
          <i data-lucide="calendar" class="w-3.5 h-3.5 text-[#1B4D3E]"></i>
          <span>حجز جلسة</span>
        </button>
      `;
    }

    if (msgsEl) {
      msgsEl.innerHTML = (activeConv.messages || []).map(m => {
        const isUser = m.sender === 'user';
        const timeStr = new Date(m.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        return `
          <div class="flex flex-col ${isUser ? 'items-end' : 'items-start'}">
            <div class="max-w-[80%] rounded-2xl p-3 text-xs leading-relaxed shadow-sm ${isUser ? 'bg-[#1B4D3E] text-white rounded-br-none' : 'bg-white border border-stone-200 text-stone-800 rounded-bl-none'}">
              ${m.text}
            </div>
            <span class="text-[10px] text-stone-400 mt-1 px-1">${timeStr}</span>
          </div>
        `;
      }).join('');
      msgsEl.scrollTop = msgsEl.scrollHeight;
    }
  },

  selectConversation(instructorId) {
    this.activeInstructorId = instructorId;
    const c = (store.conversations || []).find(x => x.instructorId === instructorId);
    if (c) c.unread = 0;
    this.renderConversations();
    if (window.lucide) lucide.createIcons();
  },

  openChatWithInstructor(instructorId) {
    store.getOrCreateConversation(instructorId);
    this.activeInstructorId = instructorId;
    this.setTab('messages');
  },

  sendChatMessage() {
    const input = document.getElementById('chat-input-field');
    if (!input || !input.value.trim() || !this.activeInstructorId) return;
    store.sendMessage(this.activeInstructorId, input.value.trim());
    input.value = '';
    this.renderConversations();
    if (window.lucide) lucide.createIcons();
  },

  sendQuickChat(text) {
    const input = document.getElementById('chat-input-field');
    if (input) input.value = text;
    this.sendChatMessage();
  },

  filterConversations() {
    this.chatFilterQuery = (document.getElementById('chat-search-input')?.value || '').trim();
    this.renderConversations();
  },

  renderSessions() {
    const listEl = document.getElementById('sessions-list');
    const prevEl = document.getElementById('dash-sessions-preview');
    if (!listEl) return;

    let sess = store.sessions;
    if (this.sessFilter !== 'all') sess = sess.filter(s => s.status === this.sessFilter);

    const cardHTML = (s) => `
      <div class="glass-card p-5 rounded-3xl border border-stone-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-white">
        <div class="flex items-center gap-3.5">
          <img src="${s.instructor.avatar}" class="w-11 h-11 rounded-2xl object-cover border border-stone-200 shadow-sm">
          <div>
            <div class="flex items-center gap-2">
              <h4 class="font-bold text-stone-900 text-sm">${i18n.localize(s.skillTitle)}</h4>
              <span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold ${s.status === 'completed' ? 'bg-emerald-100 text-emerald-800' : (s.status === 'pending' ? 'bg-amber-100 text-amber-800' : 'bg-blue-100 text-blue-800')}">
                ${s.status}
              </span>
            </div>
            <p class="text-xs text-stone-500 mt-0.5">المدرّب: <span class="font-semibold text-stone-700">${s.instructor.name}</span> • المدة: <span class="text-[#1B4D3E] font-bold">${s.hours} ${i18n.t('timeHour')}</span></p>
          </div>
        </div>
        <div class="flex flex-wrap items-center gap-2 w-full sm:w-auto">
          ${s.status !== 'completed' && s.status !== 'cancelled' ? `
            <button onclick="app.enterRoom('${s.id}')" class="flex-1 sm:flex-none px-4 py-2 rounded-xl bg-[#1B4D3E] text-white text-xs font-bold hover:bg-[#12382D] transition shadow-md flex items-center justify-center gap-1.5">
              <i data-lucide="video" class="w-4 h-4 text-[#A7F3D0]"></i>
              <span>${i18n.t('enterRoomBtn')}</span>
            </button>
            <button onclick="app.completeSession('${s.id}')" class="px-3 py-2 rounded-xl border border-emerald-300 text-emerald-700 hover:bg-emerald-50 text-xs font-bold" title="تأكيد إتمام الجلسة وتحرير الساعات">
              <i data-lucide="check" class="w-4 h-4"></i>
            </button>
            <button onclick="app.cancelSession('${s.id}')" class="px-3 py-2 rounded-xl border border-red-200 text-red-600 hover:bg-red-50 text-xs font-bold" title="إلغاء">
              <i data-lucide="x" class="w-4 h-4"></i>
            </button>
            <button onclick="app.shareSessionWhatsApp('${s.id}')" class="px-3 py-2 rounded-xl border border-green-200 text-green-700 hover:bg-green-50 text-xs font-bold" title="مشاركة عبر واتساب">
              <i data-lucide="share-2" class="w-4 h-4"></i>
            </button>
          ` : `<span class="text-xs text-stone-400 font-medium">${s.status === 'completed' ? 'مكتملة ومحررة من الضمان' : 'ملغاة ومستردة'}</span>`}
        </div>
      </div>
    `;

    listEl.innerHTML = sess.map(cardHTML).join('') || `<div class="py-12 text-center text-stone-400 text-xs">لا توجد جلسات حالياً.</div>`;
    if (prevEl) prevEl.innerHTML = store.sessions.slice(0, 2).map(cardHTML).join('');
  },

  renderLedger() {
    const box = document.getElementById('transactions-ledger');
    if (!box) return;
    box.innerHTML = store.transactions.map(tx => {
      const isDep = tx.type === 'deposit' || tx.type === 'refund';
      return `
        <div class="p-3.5 flex items-center justify-between text-xs">
          <div class="flex items-center gap-3">
            <div class="w-8 h-8 rounded-xl flex items-center justify-center ${isDep ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'}">
              <i data-lucide="${isDep ? 'arrow-down-left' : 'shield-alert'}" class="w-4 h-4"></i>
            </div>
            <div>
              <div class="font-bold text-stone-800">${i18n.localize(tx.note)}</div>
              <div class="text-[10px] text-stone-400">${new Date(tx.timestamp).toLocaleString()}</div>
            </div>
          </div>
          <span class="font-extrabold ${isDep ? 'text-emerald-700' : 'text-amber-700'}">
            ${isDep ? '+' : '-'}${tx.hours} ${i18n.t('timeHour')}
          </span>
        </div>
      `;
    }).join('') || `<div class="py-6 text-center text-stone-400 text-xs">لا توجد معاملات سابقة.</div>`;
  },

  openBookingModal(id) {
    this.bookingId = id;
    const s = store.skills.find(x => x.id === id);
    if (!s) return;

    const info = document.getElementById('booking-skill-info');
    if (info) info.innerHTML = `<img src="${s.image}" class="w-12 h-12 rounded-xl object-cover"><div><h4 class="font-bold text-stone-900 text-xs">${i18n.localize(s.title)}</h4><span class="text-[11px] text-stone-500">${i18n.localize(s.instructor.name)}</span></div>`;

    const dInput = document.getElementById('booking-date-input');
    if (dInput) dInput.value = new Date(Date.now() + 86400000).toISOString().slice(0, 16);

    this.calcBookingRemaining();
    this.toggleModal('booking-modal', true);
  },

  calcBookingRemaining() {
    const hours = Number(document.getElementById('booking-hours-select')?.value || 1);
    const bal = store.user.balance;
    const rem = bal - hours;

    const cur = document.getElementById('booking-curr-bal');
    const cost = document.getElementById('booking-cost');
    const remEl = document.getElementById('booking-rem-bal');
    const btn = document.getElementById('confirm-booking-btn');

    if (cur) cur.textContent = `${bal} ${i18n.t('timeHour')}`;
    if (cost) cost.textContent = `${hours} ${i18n.t('timeHour')}`;
    if (remEl) {
      remEl.textContent = `${Math.max(0, rem)} ${i18n.t('timeHour')}`;
      remEl.className = rem < 0 ? 'text-red-600 font-bold' : 'text-[#1B4D3E] font-bold';
    }
    if (btn) {
      btn.disabled = rem < 0;
      btn.classList.toggle('opacity-50', rem < 0);
    }
  },

  executeBooking() {
    if (!this.bookingId) return;
    const hours = Number(document.getElementById('booking-hours-select')?.value || 1);
    const date = document.getElementById('booking-date-input')?.value;

    try {
      store.bookSession({ skillId: this.bookingId, date, hours });
      this.toggleModal('booking-modal', false);
      this.showToast('تم حجز الجلسة بنجاح وتجميد الساعات في الضمان!', 'success');
      this.setTab('sessions');
    } catch (e) {
      this.showToast(e.message, 'error');
    }
  },

  completeSession(id) {
    if (store.completeSession(id)) this.showToast('تم إتمام الجلسة وتحرير الساعات بنجاح!', 'success');
  },

  cancelSession(id) {
    if (confirm('هل ترغب بإلغاء الجلسة واسترجاع الساعات المجمدة؟')) {
      if (store.cancelSession(id)) this.showToast('تم إلغاء الجلسة واسترجاع الساعات.', 'info');
    }
  },

  topUp() {
    store.addHours(50);
    this.showToast('تم شحن 50 ساعة إضافية بنجاح!', 'success');
  },

  resetData() {
    if (confirm('هل تريد إعادة تعيين كافة البيانات إلى الحالة الافتراضية؟')) {
      store.reset();
      this.showToast('تمت استعادة البيانات.', 'info');
      this.setTab('dashboard');
    }
  },

  enterRoom(id) {
    this.roomId = id;
    const s = store.sessions.find(x => x.id === id);
    if (!s) return;

    const titleEl = document.getElementById('room-title');
    const instEl = document.getElementById('room-instructor-label');
    if (titleEl) titleEl.textContent = `غرفة: ${i18n.localize(s.skillTitle)}`;
    if (instEl) instEl.textContent = `المدرّب: ${s.instructor.name}`;

    this.isMuted = false;
    this.isCamOff = false;
    this._updateMicBtn();
    this._updateCamBtn();

    if (this.anim) cancelAnimationFrame(this.anim);
    const canvas = document.getElementById('virtual-stream-canvas');
    if (canvas) {
      const ctx = canvas.getContext('2d');
      canvas.width = 640; canvas.height = 360;
      let t = 0;
      const particles = Array.from({ length: 18 }, () => ({
        x: Math.random() * 640, y: Math.random() * 360,
        vx: (Math.random() - 0.5) * 0.6, vy: (Math.random() - 0.5) * 0.6,
        r: Math.random() * 2 + 1
      }));
      const draw = () => {
        t += 0.04;
        ctx.fillStyle = 'rgba(15, 45, 36, 0.92)'; ctx.fillRect(0, 0, 640, 360);

        particles.forEach(p => {
          p.x += p.vx; p.y += p.vy;
          if (p.x < 0 || p.x > 640) p.vx *= -1;
          if (p.y < 0 || p.y > 360) p.vy *= -1;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(167, 243, 208, 0.4)';
          ctx.fill();
        });

        ctx.strokeStyle = '#A7F3D0'; ctx.lineWidth = 2.5; ctx.beginPath();
        for (let x = 0; x < 640; x += 4) {
          const amp = 30 + 10 * Math.sin(t * 0.7);
          const y = 180 + Math.sin(x * 0.025 + t) * amp * Math.sin(t * 0.4 + x * 0.01);
          if (x === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
        }
        ctx.stroke();

        ctx.fillStyle = 'rgba(167, 243, 208, 0.9)'; ctx.font = 'bold 13px Cairo, sans-serif'; ctx.textAlign = 'center';
        ctx.fillText('● بث حي مباشر | LIVE', 320, 28);
        ctx.fillStyle = 'rgba(255,255,255,0.75)'; ctx.font = '12px Cairo, sans-serif';
        ctx.fillText(i18n.localize(s.skillTitle), 320, 345);

        this.anim = requestAnimationFrame(draw);
      };
      draw();
    }

    this.seconds = 0;
    if (this.timer) clearInterval(this.timer);
    this.timer = setInterval(() => {
      this.seconds++;
      const h = String(Math.floor(this.seconds / 3600)).padStart(2, '0');
      const m = String(Math.floor((this.seconds % 3600) / 60)).padStart(2, '0');
      const sc = String(this.seconds % 60).padStart(2, '0');
      const timerEl = document.getElementById('room-timer');
      if (timerEl) timerEl.textContent = `${h}:${m}:${sc}`;
    }, 1000);

    const chatBox = document.getElementById('room-chat-messages');
    if (chatBox) chatBox.innerHTML = `<div class="p-2 rounded-xl bg-stone-900 text-stone-300">مرحباً! الجلسة بدأت — ${i18n.localize(s.skillTitle)}</div>`;

    this.toggleModal('virtual-room-modal', true);
  },

  leaveRoom() {
    if (this.timer) clearInterval(this.timer);
    if (this.anim) cancelAnimationFrame(this.anim);
    if (this.activeStream) {
      this.activeStream.getTracks().forEach(t => t.stop());
      this.activeStream = null;
    }
    const timerEl = document.getElementById('room-timer');
    if (timerEl) timerEl.textContent = '00:00:00';
    this.toggleModal('virtual-room-modal', false);
  },

  completeActiveRoomSession() {
    if (this.roomId) this.completeSession(this.roomId);
    this.leaveRoom();
  },

  _updateMicBtn() {
    const btn = document.getElementById('mic-toggle-btn');
    if (!btn) return;
    btn.classList.toggle('bg-red-600', this.isMuted);
    btn.classList.toggle('bg-stone-800', !this.isMuted);
    btn.title = this.isMuted ? 'تشغيل الصوت' : 'كتم الصوت';
    btn.innerHTML = `<i data-lucide="${this.isMuted ? 'mic-off' : 'mic'}" class="w-4 h-4"></i>`;
    if (window.lucide) lucide.createIcons({ root: btn });
  },

  _updateCamBtn() {
    const btn = document.getElementById('cam-toggle-btn');
    if (!btn) return;
    btn.classList.toggle('bg-red-600', this.isCamOff);
    btn.classList.toggle('bg-stone-800', !this.isCamOff);
    btn.title = this.isCamOff ? 'تشغيل الكاميرا' : 'إيقاف الكاميرا';
    btn.innerHTML = `<i data-lucide="${this.isCamOff ? 'camera-off' : 'camera'}" class="w-4 h-4"></i>`;
    if (window.lucide) lucide.createIcons({ root: btn });
  },

  toggleMic() {
    this.isMuted = !this.isMuted;
    this._updateMicBtn();
    this.showToast(this.isMuted ? '🔇 تم كتم الصوت' : '🎙️ تم تشغيل الصوت', 'info');
  },

  toggleCam() {
    this.isCamOff = !this.isCamOff;
    this._updateCamBtn();
    this.showToast(this.isCamOff ? '📷 تم إيقاف الكاميرا' : '📹 تم تشغيل الكاميرا', 'info');
  },

  async shareScreen() {
    if (!navigator.mediaDevices?.getDisplayMedia) {
      this.showToast('مشاركة الشاشة غير مدعومة في هذا المتصفح', 'error');
      return;
    }
    try {
      const stream = await navigator.mediaDevices.getDisplayMedia({ video: true });
      this.activeStream = stream;
      const canvas = document.getElementById('virtual-stream-canvas');
      if (canvas) {
        const video = document.createElement('video');
        video.srcObject = stream;
        video.autoplay = true;
        video.onloadedmetadata = () => {
          const ctx = canvas.getContext('2d');
          if (this.anim) cancelAnimationFrame(this.anim);
          const drawScreen = () => {
            ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
            this.anim = requestAnimationFrame(drawScreen);
          };
          drawScreen();
        };
        stream.getVideoTracks()[0].onended = () => {
          this.showToast('انتهت مشاركة الشاشة', 'info');
          this.enterRoom(this.roomId);
        };
      }
      this.showToast('تمت مشاركة الشاشة بنجاح!', 'success');
    } catch {
      this.showToast('تم إلغاء مشاركة الشاشة', 'info');
    }
  },

  sendRoomMessage() {
    const inp = document.getElementById('room-chat-input');
    const box = document.getElementById('room-chat-messages');
    if (!inp || !box || !inp.value.trim()) return;
    box.innerHTML += `<div class="p-2 rounded-xl bg-[#1B4D3E] text-white ms-auto text-end max-w-[85%]">${inp.value.trim()}</div>`;
    inp.value = '';
    box.scrollTop = box.scrollHeight;
    setTimeout(() => {
      box.innerHTML += `<div class="p-2 rounded-xl bg-stone-900 text-stone-300 me-auto text-start max-w-[85%]">ممتاز، الصوت والصورة واضحان!</div>`;
      box.scrollTop = box.scrollHeight;
    }, 1000);
  },

  filterSkills() { this.renderSkills(); },

  setCategoryFilter(c) {
    this.catFilter = c;
    document.querySelectorAll('.cat-filter-btn').forEach(b => {
      const active = b.getAttribute('data-cat-filter') === c;
      b.className = `cat-filter-btn px-3 py-2 rounded-xl font-semibold transition shrink-0 ${active ? 'bg-[#1B4D3E] text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'}`;
    });
    this.renderSkills();
  },

  setSessionFilter(f) {
    this.sessFilter = f;
    document.querySelectorAll('.session-tab-btn').forEach(b => {
      const active = b.getAttribute('data-sess-filter') === f;
      b.classList.toggle('active', active);
      b.classList.toggle('text-stone-700', active);
      b.classList.toggle('font-bold', active);
      b.classList.toggle('text-stone-500', !active);
    });
    this.renderSessions();
  },

  shareSkillWhatsApp(skillId) {
    const s = store.skills.find(x => x.id === skillId);
    if (!s) return;
    const title = i18n.localize(s.title);
    const instructor = i18n.localize(s.instructor.name);
    const text = encodeURIComponent(`🎓 تعلّم "${title}" مع ${instructor} على منصة مَهارة!\n⏱️ التكلفة: ${s.hours} ساعة فقط من بنك وقتك.\nhttps://maharah.app`);
    window.open(`https://wa.me/?text=${text}`, '_blank');
  },

  shareSessionWhatsApp(sessionId) {
    const s = store.sessions.find(x => x.id === sessionId);
    if (!s) return;
    const title = i18n.localize(s.skillTitle);
    const text = encodeURIComponent(`📅 حجزت جلسة "${title}" على منصة مَهارة لتبادل المهارات!\n⏱️ المدة: ${s.hours} ساعة — جربها مجاناً.\nhttps://maharah.app`);
    window.open(`https://wa.me/?text=${text}`, '_blank');
  },

  toggleModal(id, show) {
    document.getElementById(id)?.classList.toggle('hidden', !show);
    if (show && window.lucide) lucide.createIcons();
  },

  closeModal(id) { this.toggleModal(id, false); },

  showToast(msg, type = 'info') {
    const box = document.getElementById('toast-container');
    if (!box) return;
    const t = document.createElement('div');
    const ok = type === 'success', err = type === 'error';
    t.className = `toast-item px-4 py-3 rounded-2xl shadow-xl text-xs font-bold flex items-center gap-2 border text-white ${ok ? 'bg-[#1B4D3E] border-emerald-400' : (err ? 'bg-red-700 border-red-500' : 'bg-stone-900 border-stone-700')}`;
    t.innerHTML = `<i data-lucide="${ok ? 'check-circle' : (err ? 'alert-circle' : 'info')}" class="w-4 h-4"></i><span>${msg}</span>`;
    box.appendChild(t);
    if (window.lucide) lucide.createIcons({ root: t });
    setTimeout(() => { t.style.opacity = '0'; setTimeout(() => t.remove(), 250); }, 3000);
  }
};

window.app = app;
document.addEventListener('DOMContentLoaded', () => app.init());
