import React from 'react';
import { HashRouter, Route } from "react-router-dom";
import About from "./routes/About";
import Home from "./routes/Home";
import Navigation from "./component/Navigation";
import Detail from "./routes/Detail";
import './routes/Home.css';


class App extends React.Component {
//   state = {}

//   componentDidMount () {
//     setTimeout(() => {
//       this.setState({
//         movies: [
//           {
//             id: 1,
//             title: "Rocky",
//             img:   "https://is5-ssl.mzstatic.com/image/thumb/Video128/v4/2d/cf/63/2dcf6335-5465-900e-12d6-f4bea7bf4137/pr_source.lsr/268x0w.png"
//           },
//           {
//             id: 2,
//             title: "Matrix",
//             img:     "https://upload.wikimedia.org/wikipedia/en/thumb/c/c1/The_Matrix_Poster.jpg/220px-The_Matrix_Poster.jpg"
//           },
//           {
//             id: 3,
//             title: "Life of Pi",
//             img:   "https://upload.wikimedia.org/wikipedia/en/5/57/Life_of_Pi_2012_Poster.jpg"
//           },
//           {
//             id: 4,
//             title: "Inception",
//             img:   "https://irs.www.warnerbros.com/keyart-jpeg/inception_keyart.jpg"
//           }
//         ]
//       })
//     }, 2000);
//   }

//   _renderMovie = () => {
//     const { movies } = this.state;
//     return (
//       <div>
//         {movies.map((movie) => {
//           return (
//             <div key={movie.id}>
//               <Trailer title={movie.title} poster={movie.img} />
//             </div>
//           )
//         })}
//       </div>
//     )
//   }

  render (){
    return (
//       <div>
//         {this.state.movies ? this._renderMovie() : "Loading"}
//       </div>
//     )
//   }


    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={ Home } />
      <Route path="/about" exact={true} component={ About } />
      <Route path="/movie-detail" exact={true} component={ Detail } />
    </HashRouter>
  );
}
}

export default App;