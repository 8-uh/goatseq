/*global window: true, document: true*/
(function(App, $) {
  "use strict";

  var al = '/content/audio/2002DANC/';
  var gl = '/content/audio/GOAT/';

  $(document).ready(function() {

    // INIT ALL THE THINGS

    // Initialize main UI components
    App.ui.TrackManager('#sequence', '#trackmanager');

    App.ui.Transport('#transport');


    // Time keeper
    App.Tempo();

    // Keeps all the ons and offs
    App.Pattern();

    // Allow playing some sounds
    App.ChannelManager()
      .addChannel(al + 'KIK_1.wav')
      .addChannel(al + 'HAT_7.wav')
      .addChannel(gl + 'GOAT-sneeze.wav')
      .addChannel(al + 'RIDE_CYM.wav')
      .addChannel(gl + 'GOAT-yeaaaah.wav')
      .addChannel(gl + 'GOAT-scream.wav');

  });

}(window.STEPSEQUENCER, window.jQuery));
