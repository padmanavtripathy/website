function fun1()
{
    document.getElementById("a").innerText="Web Hosting Affiliate Program";
    document.getElementById("b").innerText="Partner with us & earn cash.";
    document.getElementById("c").innerText="Promote HostGator on your site and earn moolah along the way. Joining the program is fast & free!";
    document.getElementById("d").innerText="Already an affiliate? Login to your account.";
}
function fun2(){
    document.getElementById("a").innerText="Web Hosting Tips";
    document.getElementById("b").innerText="Best Point of Sale (POS) Plugins for WooCommerce";
    document.getElementById("c").innerText="You have a vision. You have a camera, the perfect medium for expressing it. You have a knack for taking…";
    document.getElementById("d").innerText="Marketing Tips and Tricks";
}
function fun3(){
    document.getElementById("a").innerText="Domain Registration";
    document.getElementById("b").innerText="Snag your fav domain.";
    document.getElementById("c").innerText="Grab a .com starting at $12.95/yr*";
    document.getElementById("d").innerText="Already have a domain? Transfer it to us";
}
function fun4()
{
document.getElementById("a").innerText="Shared Hosting";
document.getElementById("b").innerText="Hosting for every website.";
document.getElementById("c").innerText="Unlimited storage, unmetered bandwidth, unbeatable hosting. This gator’s got ya covered.";
document.getElementById("d").innerText="And we’ll throw in a free domain for a year, too.";
}
function fun5()
{
    
// a.innerHTML.src="HTML\img\Screenshot (4).png";
document.getElementById("a").innerText="Dedicated Hosting";
document.getElementById("b").innerText="The ultimate power hosting";
document.getElementById("c").innerText="Got questions? We can help.";
document.getElementById("d").innerText="Request a call back or Chat Now";

}
function alert1()
{
    alert("This is not avalable for now !!!");
}
$(document).ready(function(){
    $("button").click(function(){
        $("p").toggle(1000);
    });
});
$("document").ready(function(){
    $("lists").fadeOut(3000);
});