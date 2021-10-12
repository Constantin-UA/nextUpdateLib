import './lib/lib';
import $ from './lib/lib';

$('.mouthBtn').click(mouthAAA);
$('.mouthBtn').html('|(===)|');
$('div').eq(6).log();
$('.mouthBtn').addClass('mouthAll');
$('.list-item').click(indexTest);

function mouthAAA() {
	$('.right').toggleClass('active');
	$('.left').toggleClass('active');
	$('div').find('.active').log();
}

function indexTest() {
	console.log($(this).index());
}
$('.wrapper').find('.list-item').log();
