import { createClient} from '@supabase/supabase-js'
import { Auth } from '@supabase/auth-ui-react'
import { useNavigate } from 'react-router-dom';

const supabase = createClient (
    'https://nlwrmyrjpaaqtuimfduy.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5sd3JteXJqcGFhcXR1aW1mZHV5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQxMTMyMzYsImV4cCI6MjAzOTY4OTIzNn0.K6OqJZCpAwJ02ii7Tf97cXdtoD2OC6HMZbaEPIayHI4'
);

function Login() {
    const navigate = useNavigate();

    supabase.auth.onAuthStateChange(async (event) => {
        if ( event !== "SIGNED_OUT") {
            navigate("/sucsess");
        } else {
            navigate("/");
        }
    })

    return (
      <div className="App">
        <header className="App-header">
          <Auth
                supabaseClient={supabase}
                appearance={{theme: 'default'}}
                theme='dark'
                providers={["spotify"]}
          />
        </header>
      </div>
    );
  }

export default Login;