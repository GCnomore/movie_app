(this.webpackJsonpmovie_app=this.webpackJsonpmovie_app||[]).push([[0],{17:function(e,t,a){},22:function(e,t,a){},35:function(e,t,a){e.exports=a(65)},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(32),l=a.n(r),o=a(7),c=a(6);a(22);var m=function(){return i.a.createElement("div",{className:"Navigation"},i.a.createElement("p",null,i.a.createElement(o.b,{className:"Home",to:"/"},"Home"),i.a.createElement(o.b,{className:"About",to:"/about"},"About")))};var s=function(){return i.a.createElement("div",null,i.a.createElement(m,null),i.a.createElement("p",null,"This is a test app"))},u=a(10),d=a.n(u),v=a(20),p=a(11),g=a(12),E=a(14),_=a(13),h=a(15),y=a.n(h);a(63);var f=function(e){var t=e.title,a=e.year,n=e.genres,r=e.rating,l=e.runtime,c=e.mpa_rating,m=e.summary,s=e.poster,u=e.trailer,d={time:null,min:null};!function(){var e=l;if(e>=60){for(;e>=60;)d.time++,e-=60;d.min=e}else d.min=l}();var v="";return v=null==d.time?"".concat(d.min,"min"):d.time>1?"".concat(d.time,"hrs ").concat(d.min,"min"):"".concat(d.time,"hr ").concat(d.min,"min"),i.a.createElement("div",{className:"movies_movie"},i.a.createElement("img",{id:"movie_poster",className:u,src:s,alt:t,title:t}),i.a.createElement("div",{className:"movie_data"},i.a.createElement("h3",{className:"movie_title"},t),i.a.createElement("h5",{className:"movie_year"},a),i.a.createElement("h5",{className:"movie_rating"},i.a.createElement("img",{alt:"img",className:"ratingImg",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/1200px-IMDB_Logo_2016.svg.png"})," ",r," out of 10"),i.a.createElement("h5",{className:"movie_runtime"},"Runtime: ",d.time&&d.min?v:"N/A"),i.a.createElement("h5",{className:"movie_genres"},n?n.join(" / "):null),i.a.createElement("h5",{className:"movie_mpa_rating"},c?"Rated: "+c:"Rated: N/A"),i.a.createElement("p",{className:"movie_summary"},i.a.createElement(o.b,{to:{pathname:"/movie-detail",state:{title:t,year:a,genres:n,rating:r,runtime:l,mpa_rating:c,summary:m,poster:s,trailer:u}}},m.slice(0,200),"..."))))},b=(a(17),function(e){Object(E.a)(a,e);var t=Object(_.a)(a);function a(){var e;Object(p.a)(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={isLoading:!0,movies:[],value:""},e.handleSelect=function(){var t=Object(v.a)(d.a.mark((function t(a){var n,i;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setState({value:a.target.value,isLoading:!0}),t.next=3,y.a.get("https://yts-proxy.now.sh/list_movies_json?sort_by="+a.target.value+"&limit=50");case 3:n=t.sent,i=n.data.data.movies,e.setState({movies:i,isLoading:!1});case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.getMoives=Object(v.a)(d.a.mark((function t(){var a,n,i,r;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(""!==e.state.value){t.next=8;break}return t.next=3,y.a.get("https://yts-proxy.now.sh/list_movies_json?sort_by=date_added&limit=50");case 3:a=t.sent,n=a.data.data.movies,e.setState({movies:n,isLoading:!1}),t.next=13;break;case 8:return t.next=10,y.a.get("https://yts-proxy.now.sh/list_movies_json?sort_by="+e.state.value+"&limit=50");case 10:i=t.sent,r=i.data.data.movies,e.setState({movies:r,isLoading:!1});case 13:case"end":return t.stop()}}),t)}))),e.componentDidMount=function(){e.getMoives()},e}return Object(g.a)(a,[{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.movies;function n(e){var t=e.target.className,a=document.querySelector("#trailerModal");document.querySelector(".movie_container").classList.toggle("modal_background"),t?(a.classList.remove("noTrailer"),a.innerHTML='<iframe width="100%" height="100%" src='.concat("https://www.youtube.com/embed/"+t,' frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'),a.classList.toggle("hide"),a.classList.add("trailerModal")):(a.innerHTML="Preview not available",a.classList.add("noTrailer"),a.classList.toggle("hide"))}return i.a.createElement("section",{className:"container"},i.a.createElement(m,null),i.a.createElement("div",{className:"sortMenu"},i.a.createElement("form",null,i.a.createElement("label",null,"Sort by:",i.a.createElement("select",{onChange:this.handleSelect},i.a.createElement("option",{defaultValue:"sortBy"}),i.a.createElement("option",{value:"rating"},"rating"),i.a.createElement("option",{value:"year"},"year"),i.a.createElement("option",{value:"date_added"},"date added"))))),i.a.createElement("div",{className:"movie_container"},t?i.a.createElement("div",{className:"loader"},i.a.createElement("span",{className:"loader__text"},"Loading...")):i.a.createElement("div",{className:"movies"},a.map((function(e){return i.a.createElement("div",{className:"movie_box",onClick:n},i.a.createElement(f,{key:e.id,id:e.id,title:e.title,year:e.year,genres:e.genres,rating:e.rating,runtime:e.runtime,mpa_rating:e.mpa_rating,summary:e.summary,poster:e.medium_cover_image,trailer:e.yt_trailer_code}))})))),i.a.createElement("div",{className:"hide",id:"trailerModal"}))}}]),a}(i.a.Component));var w=function(e){return console.log(arguments),i.a.createElement("div",null,i.a.createElement("h1",null,"Redirecting"),";")},N=(a(64),function(e){Object(E.a)(a,e);var t=Object(_.a)(a);function a(){return Object(p.a)(this,a),t.apply(this,arguments)}return Object(g.a)(a,[{key:"componentDidMount",value:function(){var e=this.props,t=e.location,a=e.history;console.log(this.props),void 0===t.state&&a.push("/")}},{key:"render",value:function(){var e=this.props.location.state;return e?i.a.createElement("div",null,i.a.createElement("div",{id:"detail_container"},i.a.createElement(m,null),i.a.createElement("div",{id:"detail_moviePoster",onClick:function(e){var t=e.target.className,a=document.querySelector("#detail_trailerModal");document.querySelector("#detail_container").classList.toggle("modal_background"),t?(a.classList.remove("noTrailer"),a.innerHTML='<iframe width="100%" height="100%" src='.concat("https://www.youtube.com/embed/"+t,' frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'),a.classList.toggle("hide"),a.classList.add("trailerModal")):(a.innerHTML="Preview not available",a.classList.add("noTrailer"),a.classList.toggle("hide"))}},i.a.createElement("img",{alt:e.title,src:e.poster})),i.a.createElement("div",null,i.a.createElement("ul",{id:"detail_movieInfo"},i.a.createElement("li",{id:"detail_movieTitle"},e.title),i.a.createElement("li",{id:"detail_movieYear"},e.year),i.a.createElement("li",{id:"detail_movieMPA"},"Rated: ",e.mpa_rating),i.a.createElement("li",{id:"detail_movieRuntime"},"Runtime: ",e.runtime),i.a.createElement("li",{id:"detail_movieGenres"},e.genres),i.a.createElement("li",{id:"detail_movieRating"}," ",i.a.createElement("img",{alt:"img",id:"detail_ratingImg",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/1200px-IMDB_Logo_2016.svg.png"})," ",e.rating," out of 10"))),i.a.createElement("div",{id:"detail_movieSummary"},i.a.createElement("h2",null,"Summary:")," ",i.a.createElement("br",null),e.summary)),i.a.createElement("div",{className:"hide",id:"detail_trailerModal"})):null}}]),a}(i.a.Component));var L=function(){return i.a.createElement(o.a,null,i.a.createElement(c.a,{path:"/",exact:!0,component:b}),i.a.createElement(c.a,{path:"/about",exact:!0,component:s}),i.a.createElement(c.a,{path:"/trailer",exact:!0,component:w}),i.a.createElement(c.a,{path:"/movie-detail",exact:!0,component:N}))};l.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(L,null)),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.f230f0a8.chunk.js.map