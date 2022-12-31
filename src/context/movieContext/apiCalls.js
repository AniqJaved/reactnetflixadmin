import axios from "axios";
import { getMoviesFailure, getMoviesStart, getMoviesSuccess} from "./MovieActions";

export const getMovies = async (dispatch) => {
    dispatch(getMoviesStart());

    try{
        const res = await axios.get("/movies", {
            headers: { 
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,  //Here we are fetching jwt token from the local storage that we have stored in case of the AuthContext
            },
        });

        //console.log(localStorage.getItem("user"));
        dispatch(getMoviesSuccess(res.data));
    }
    catch(err){
        dispatch(getMoviesFailure());
    }
}