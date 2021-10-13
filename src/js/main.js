import './lib/lib';
import $ from './lib/lib';

$('.mouthBtn').click(mouthAAA);
// html test
$('.mouthBtn').html('|(===)|');
// eq test
console.log('eq(): ');
$('div').eq(6).log();
// addClass test
$('.mouthBtn').addClass('mouthAll');
// click test
$('.list-item').click(indexTest);

function mouthAAA() {
	$('.right').toggleClass('active');
	$('.left').toggleClass('active');
	$('div').find('.active').log();
}

function indexTest() {
	console.log($(this).index());
}
//find test
console.log('find(): ');
$('.wrapper').find('.list-item').log();
// closest test
console.log('closest(): ');
$('.list-item').eq(1).closest('.list').log();
// siblings test
console.log('siblings(): ');
$('.list-item').eq(0).siblings().log();
