var DIRTY=0;function askConfirmIfDirty(){if(DIRTY){return'** You have unsaved changes! **'}}
function makeDirty(){DIRTY=1}
function resetDirty(){DIRTY=0}
function tagChanged(event,ui){if(!ui.duringInitialization)DIRTY=1;return!0}
$(document).ready(function(){$('#termtags').tagit({afterTagAdded:tagChanged,afterTagRemoved:tagChanged});$('#texttags').tagit({afterTagAdded:tagChanged,afterTagRemoved:tagChanged});$('input,checkbox,textarea,radio,select').not('#quickmenu').bind('change',makeDirty);$(':reset,:submit').bind('click',resetDirty);$(window).bind('beforeunload',askConfirmIfDirty)})