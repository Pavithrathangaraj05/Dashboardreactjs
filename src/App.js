import profilePic from './download.jpeg';
import './App.css';


function App() {
  return (
    <div className="App">
      <div className="NavBar">
        <h4 className="Dashboard">Dashboard</h4>
         
      </div>
      <div className='headings'><h4>Profile</h4></div>
      
      <div className='Profile'>
        
        <div className='P1'>
          <div className='pro1'>
              <div className='pro11'>
              <img className="img" src={profilePic} alt="varkala"/>
              </div>
              <div className='pro12'>
                  <p>StudentName</p>
                  <p>7373231XX101</p>
                  <p className='semester'>SEMESTER-II</p>
                  <p className='continuing'>CONTINUING</p>
              </div>
          </div>
          <div className='pro3'>
                <p>B.Tech - DegreeName</p>
                <p>Mentor: MentorName</p>
                <p>Special Lab: SpecialLabName | Incharge</p>
                <p>Hosteller / DaysScholar</p>
          </div>
        </div>
        <div className='P2'>
        <div className='h12' >
          <p>Attedence OverView</p>
          <div className='A'>
          <div className='A1'>
          <p className='p'>TotalDays</p>
          <h3 className='p1'>55</h3>

          <p className='p'>OnDuty</p>
          <h3 className='p1'>3</h3>

          <p className='p'>percentage</p>
          <h3 className='p1'>94</h3>
         
          </div>
          <div className='A2'>
            <p className='p'>Persent Days</p>
            <h3 className='p1'>51</h3>

            <p className='p'>Leave Days</p>
            <h3 className='p1'>51</h3>
          </div>
          
          </div>
          <p className='Note'>Note: 80% aaattendence is mandatory to appear for end semester exam</p>
          
          

        </div>
        </div>
        
      </div>
      <div className='h1'>
        
        
        

      </div>
      <hr>
      </hr>
      <div className='headings'><h4>Placements</h4></div>
      <div className="place">
        <div className='place1'>
        
          <p className='place11'><h6 className='place11'>Placement FA %</h6></p>
          <h1 className='place12'>70%</h1>
        
        </div>
        <div className='place1'>
        <h6 className='place11'>Academic FA %</h6>
          <h3 className='place12'>75%</h3>
        </div>
        <div className='place1'>

          <h6 className='place11'>Total No.of Arrears</h6>
          <h3 className='place12'>0</h3>

        </div>
        <div className='place1'>

          <h6 className='place11'>Total No.of Arrears</h6>
          <h3 className='place12'>0</h3>
          
       </div>
      </div>

      <hr>
      </hr>
      <div className='headings'><h4>Placements Profile</h4></div>
      <div className="place">
        <div className='place1'>
        
          <p className='place11'><h6 className='place11'>Placement Cumulative</h6></p>
          <h1 className='place12'>70%</h1>
        
        </div>
        <div className='place1'>
        <h6 className='place11'>Current Sem FA %</h6>
          <h3 className='place12'>75%</h3>
        </div>
        <div className='place1'>

          <h6 className='place11'>Eligibility</h6>
          <h3 className='place12'>Need Improvement</h3>

        </div>
        <div className='place1'>

          <h6 className='place11'>Next Level</h6>
          <h3 className='place12'>Need Attention</h3>
          
       </div>
      </div>
<hr>
</hr>
<div className='headings'><h4>Targets</h4></div>

<div className="place">
        <div className='place1'>
        
          <p className='place11'><h6 className='place11'>Technical Competition</h6></p>
          <h1 className='place12'>1</h1>
          <p className='place13'>1 out of 2 completed</p>
        
        </div>
        <div className='place1'>
        <h6 className='place11'>Paper Persentation</h6>
          <h3 className='place12'>1</h3>
          <p className='place13'>0 out of 1 completed</p>
        </div>
        
      
        <div className='place1'>
        
          <p className='place11'><h6 className='place11'>Patent</h6></p>
          <h1 className='place12'>0</h1>
          <p className='place13'>0 out of 0 completed</p>
        
        </div>
        <div className='place1'>
        <h6 className='place11'>Intenship</h6>
          <h3 className='place12'>0</h3>
          <p className='place13'>0 out of 0 completed</p>
        </div>
        
      </div>

      


      


      

    </div>
  );
}

export default App;
