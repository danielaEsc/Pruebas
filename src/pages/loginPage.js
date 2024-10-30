import { Auth } from '@supabase/auth-ui-react'
} from 'react-router-dom'

import { useNavigate } from 'react-router-dom';

function Login () {
    const navigate = useNavigate();

    supabase.auth.onAuthStateChange(async (event) => {
        if ( event !== "SIGNED_OUT") { 
            navigate("/sucsess");
        } else {
            navigate( "/" )
        }

    });

    return (
      <div className="App">
        <header className="App-header">
          <Auth
                supabaseClient={ supabase }
                appearance={{theme: 'default'}}
                theme='dark'
                providers={["spotify"]}
          />
        </header>
      </div>
    );
  }

export default Login;
