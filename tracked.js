(function() {
  window.tracked = {
    'location': Intl.DateTimeFormat().resolvedOptions().timeZone.split('/').map(function(s) {
      return s.split('_').join(' ');
    } ),
    'canRead': navigator.language.toLowerCase()
    
  };
})();
