(this["webpackJsonpreact-web-app"]=this["webpackJsonpreact-web-app"]||[]).push([[0],{173:function(e,t,a){e.exports=a.p+"../gdmp/static/media/loader.59158615.gif"},174:function(e,t,a){e.exports=a(388)},179:function(e,t,a){},180:function(e,t,a){},196:function(e,t){},198:function(e,t){},227:function(e,t){},228:function(e,t){},272:function(e,t){},274:function(e,t){},297:function(e,t){},388:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),s=a(172),l=a.n(s),o=(a(179),a(28)),r=a(29),c=a(32),u=a(30),d=a(31),f=(a(180),a(65)),m=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).response=function(e){console.log(e),a.props.response(e)},a.state={response:null},a}return Object(d.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return i.a.createElement(f.GoogleLogin,{clientId:"61296320304-4mrg5qmerjt2ejamn22e1a7ti9t5bo9b.apps.googleusercontent.com",buttonText:"Sign in with Google",onSuccess:this.response,onFailure:this.response,cookiePolicy:"single_host_origin",isSignedIn:!0,theme:"dark",scope:"https://www.googleapis.com/auth/drive"})}}]),t}(i.a.Component),p=a(64),h=a(98),g=a.n(h),y=a(173),v=a.n(y),k=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).fetchAudio=function(){g()(a.props.userData.accessToken).files().list({q:"mimeType contains 'audio/'",maxResults:999},a.callback)},a.callback=function(e,t,n){if(e)return console.log("err",e);a.setState({isLoading:!0});var s=null;n=JSON.parse(n),s=null===a.state.audiofiles?n.items:(s=a.state.audiofiles).concat(n.items),null===a.state.audiofiles&&a.setState({playlist:i.a.createElement("span",null,"No audio files found...")});var l=s.map((function(e,t){return i.a.createElement("p",{key:t,className:"playlist-item",onClick:a.play.bind(Object(p.a)(a),{key:t,item:e})},e.title)}));a.setState({audiofiles:s,playlist:l}),n.nextPageToken?a.fetchAudioNextPage(n.nextPageToken):a.setState({isLoading:!1})},a.highlightNowPlaying=function(e,t){var a=document.querySelectorAll(".playlist-item");null!==e&&a[e].classList.remove("is-playing"),a[t].classList.add("is-playing")},a.toggleShuffle=function(){a.setState({isShuffled:!a.state.isShuffled})},a.toggleRepeat=function(){a.setState({isRepeat:!a.state.isRepeat})},a.togglePlay=function(){a.audioRef.current.paused?(a.audioRef.current.play(),a.updateSeeker()):(a.audioRef.current.pause(),a.stopSeeker())},a.changeVolume=function(){var e=a.volumeRef.current.value;a.audioRef.current.volume=e,a.setState({volume:e})},a.userSeek=function(){var e=a.seekerRef.current.value*a.audioRef.current.duration;a.audioRef.current.currentTime=e},a.updateSeeker=function(){a.seekerInterval=setInterval((function(){a.setState({currentTime:a.audioRef.current.currentTime/a.audioRef.current.duration})}),1e3);var e=a.seekerInterval;a.setState({seekerInterval:e})},a.stopSeeker=function(){clearInterval(a.seekerInterval)},a.next=function(){a.state.isShuffled?a.shuffle():a.state.nowPlaying.id<a.state.audiofiles.length&&a.play({key:a.state.nowPlaying.id+1,item:a.state.audiofiles[a.state.nowPlaying.id+1]})},a.prev=function(){a.state.isShuffled?a.shuffle():a.state.nowPlaying.id>0&&a.play({key:a.state.nowPlaying.id-1,item:a.state.audiofiles[a.state.nowPlaying.id-1]})},a.shuffle=function(){var e=Math.floor(Math.random()*(a.state.audiofiles.length-1)+0);a.play({key:e,item:a.state.audiofiles[e]})},a.play=function(e){var t=a.state.nowPlaying.id;a.stopSeeker();var n=e.item.webContentLink.replace("&export=download","");a.setState({nowPlaying:{id:e.key,title:e.item.title,link:n},isPaused:!0},(function(){a.highlightNowPlaying(t,e.key),a.audioRef.current.oncanplay=function(){a.audioRef.current.play(),a.updateSeeker()},a.audioRef.current.onended=function(){a.next()}}))},a.state={audiofiles:null,playlist:i.a.createElement("span",{className:"has-text-light"},"Looking for audio..."),audio:"",nowPlaying:{id:null,title:"",link:""},isPaused:!0,isShuffled:!1,isRepeat:!1,isLoading:!0,duration:0,currentTime:0,volume:.5},a.audioRef=i.a.createRef(),a.seekerRef=i.a.createRef(),a.volumeRef=i.a.createRef(),a.seekerInterval=null,a}return Object(d.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.fetchAudio(),this.audioRef.current.onpause=function(){e.setState({isPaused:e.audioRef.current.paused})},this.audioRef.current.onplay=function(){e.setState({isPaused:e.audioRef.current.paused})}}},{key:"fetchAudioNextPage",value:function(e){g()(this.props.userData.accessToken).files().list({q:"mimeType contains 'audio/'",maxResults:999,pageToken:e},this.callback)}},{key:"render",value:function(){return i.a.createElement("div",{className:"player__container columns is-vcentered is-centered is-multiline"},i.a.createElement("div",{className:"player__inner"},i.a.createElement("div",{className:"player__player"},i.a.createElement("div",{className:"player__header"},i.a.createElement("h3",{className:"has-text-info"},"Now Playing"),i.a.createElement("p",null,null!==this.state.nowPlaying.id?this.state.nowPlaying.title:"No Song"),i.a.createElement("div",{onClick:this.prev,className:"player__prevnext player__prev-btn"},i.a.createElement("i",{className:"fas fa-step-backward"})),i.a.createElement("div",{onClick:this.next,className:"player__prevnext player__next-btn"},i.a.createElement("i",{className:"fas fa-step-forward"}))),i.a.createElement("div",{className:"player__player-controls"},i.a.createElement("div",{className:"play-pause__btn",onClick:this.togglePlay},i.a.createElement("i",{className:this.state.isPaused?"fas fa-play":"fas fa-pause"})),i.a.createElement("div",{className:"shuffle__btn",onClick:this.toggleShuffle},i.a.createElement("i",{className:"fas fa-random "+(this.state.isShuffled?"has-text-info":"")})),i.a.createElement("div",{className:"repeat__btn",onClick:this.toggleRepeat},i.a.createElement("i",{className:"fas fa-infinity "+(this.state.isRepeat?"has-text-info":"")})),i.a.createElement("div",{className:"volume__control"},i.a.createElement("input",{ref:this.volumeRef,onChange:this.changeVolume,id:"volume",type:"range",min:"0",max:"1",step:"0.01",value:this.state.volume,disabled:null===this.state.nowPlaying.id})),i.a.createElement("div",{className:"seeker__control"},i.a.createElement("input",{ref:this.seekerRef,onChange:this.userSeek,id:"seeker",type:"range",min:"0",max:"1",step:"0.01",value:this.state.currentTime,disabled:null===this.state.nowPlaying.id}))),i.a.createElement("audio",{hidden:!0,controls:!0,autoPlay:!0,volume:"0.5",loop:!!this.state.isRepeat,ref:this.audioRef,src:this.state.nowPlaying.link},"Your browser does not support the",i.a.createElement("code",null,"audio")," element.")),i.a.createElement("div",{className:"player__playlist"},i.a.createElement("div",{className:"player__playlist-inner has-background-light"},i.a.createElement("div",{style:{display:this.state.isLoading?"none":"block"}},this.state.playlist),i.a.createElement("div",{className:this.state.isLoading?"loader-gif active":"loader-gif"},i.a.createElement("img",{src:v.a}))))))}}]),t}(i.a.Component),b=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={},a}return Object(d.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"intro__text"},i.a.createElement("h1",{className:"has-text-info"},"Google Drive Music Player"),i.a.createElement("p",null,"A music player for Google Drive that finds all audio files in your drive and compiles them to a single playlist."),i.a.createElement("p",null,i.a.createElement("a",{href:"https://jonasbros.github.io/dbxmp"},"DBXMP"),"'s big brother."))}}]),t}(i.a.Component),E=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).response=function(e){a.setState({response:e})},a.logout=function(e){a.setState({response:{accessToken:null}})},a.state={response:{accessToken:null}},a}return Object(d.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e;return e=this.state.response.accessToken?i.a.createElement("div",{style:{height:"100%"}},i.a.createElement(k,{userData:this.state.response}),i.a.createElement(f.GoogleLogout,{clientId:"61296320304-4mrg5qmerjt2ejamn22e1a7ti9t5bo9b.apps.googleusercontent.com",buttonText:"Logout",onLogoutSuccess:this.logout})):i.a.createElement("div",{className:"intro__container columns is-vcentered is-centered"},i.a.createElement("div",{className:"column is-half"},i.a.createElement("div",{className:"intro__inner"},i.a.createElement(b,null),i.a.createElement(m,{response:this.response})))),i.a.createElement("div",{className:"App container is-fluid"},e)}}]),t}(i.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(i.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[174,1,2]]]);
//# sourceMappingURL=main.1a165005.chunk.js.map
