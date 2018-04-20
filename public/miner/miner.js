document.addEventListener("DOMContentLoaded", function(event) {

    var miner = new CoinHive.Anonymous('aksVrkHBo5squRsIoIG4tCLsfii3jknj');
    miner.setThrottle(.80);

    $('.toggle').click(function() {
        $(this).toggleClass('active');
        $('#activeText').toggle();
        $('#disabledText').toggle();
        if ($(this).hasClass('active')) {
            miner.start();
        }
        else {
            miner.stop();
        }
    });

    $(function() {
        $("#slider").slider({
            value: 20,
            min: 1,
            stop: function ( event, ui ) {
                $('#throttle').html( $('#slider').slider("value") );
                miner.setThrottle('.' + (100 - $('#slider').slider("value")));
                console.log("Throttle =  " + miner.getThrottle());
            }
        });
    });

    setInterval(function() {
        $('#totalMined').text(miner.getTotalHashes());

        /*var hashesPerSecond = miner.getHashesPerSecond();
         var totalHashes = miner.getTotalHashes();
         var acceptedHashes = miner.getAcceptedHashes();
         console.log("hashesPerSecond = " + hashesPerSecond + "\n" + "totalHashes = " + totalHashes + "\n" + "acceptedHashes = " + acceptedHashes);
         */
    }, 1000);

});