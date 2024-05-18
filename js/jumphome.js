
var home;
home = window.location.hostname;
const host_name = home.split('.')
if ('localhost' == host_name){
    alert('jump')
    window.location = "https://g-haoyu.top"+window.location.pathname;
}