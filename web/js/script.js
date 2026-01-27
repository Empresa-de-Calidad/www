function openIndex() {
        window.location.replace("index.html");
}

function showSearch() {
    if (window.event && window.event.preventDefault) window.event.preventDefault();
    var el = document.getElementById("nav_search_extension");
    if (!el) return;
    if (el.style.display === "block") {
        el.style.display = "none";
        el.disabled = true;
    } else {
        el.style.display = "block";
        el.disabled = false;
        try { el.focus(); } catch (e) {}
    }
}

// Toggle user dropdown menu
function toggleUserMenu() {
    var menu = document.getElementById('userMenu');
    var btn = document.getElementById('navUserButton');
    if (!menu || !btn) return;
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
        document.removeEventListener('click', outsideClickListener);
    } else {
        menu.style.display = 'block';
        menu.style.visibility = 'hidden';
        // measure menu and position
        var rect = btn.getBoundingClientRect();
        var mw = menu.offsetWidth;
        var left = rect.right - mw;
        if (left < 8) left = 8;
        var top = rect.bottom;
        var viewportHeight = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
        if (top + menu.offsetHeight > viewportHeight - 8) {
            top = viewportHeight - menu.offsetHeight - 8;
            if (top < 8) top = 8;
        }
        menu.style.left = left + 'px';
        menu.style.top = top + 'px';
        menu.style.visibility = '';
        setTimeout(function(){ document.addEventListener('click', outsideClickListener); }, 0);
    }
}

// Close dropdown when clicking outside
function outsideClickListener(e) {
    var menu = document.getElementById('userMenu');
    var btn = document.getElementById('navUserButton');
    if (!menu || !btn) return;
    if (!btn.contains(e.target) && !menu.contains(e.target)) {
        menu.style.display = 'none';
        document.removeEventListener('click', outsideClickListener);
    }
}