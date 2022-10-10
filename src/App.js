
// import Greet from './components/Greet';
// import Welcome from './components/Welcome';
// import ClassClick from './components/ClassClick';
import React from 'react';
import './App.css';
import PostForm from './components/PostForm';
// import PostList from './components/PostList';
// import CounterTwo from './components/CounterTwo';
// import ClickCounterTwo from './components/ClickCounterTwo';
// import HoverCounterTwo from './components/HoverCounterTwo';
// import ComponentC from './components/ComponentC';
// import { UserProvider } from './components/userContext';
// import HoverCounterTwo from './components/HoverCounterTwo';
// import User from './components/User';
// import ClickCounter from './components/ClickCounter';
// import HoverCounter from './components/HoverCounter';
// import ErrorBoundary from './components/ErrorBoundary';
// import Hero from './components/Hero';
// import FRParentInput from './components/FRParentInput';
// import PortalDemo from './components/PortalDemo';
// import FocusInput from './components/FocusInput';
// import RefsDemo from './components/RefsDemo';
// import ParentComp from './components/ParentComp';
// import PureComp from './components/PureComponent';
// import Table from './components/Table';
// import FragmentDemo from './components/FragmentDemo';
// import NameList from './components/NameList';
// import StyleSheets from './components/StyleSheets';
// import FunctionClick from './components/FunctionClick';
// import EventBind from './components/EventBind';
// import ParentComponent from './components/ParentComponent';
// import UserGreeting from './components/UserGreeting';
// import Message from './components/Message';
// import Counter from './components/Counter';
// import Hello from './components/Hello';
// import Inline from './components/Inline';
// import './components/appStyles.css'
// import styles from'./components/appStyles.module.css'
  //  import Form from './components/Form';
// import LifeCycleA from './components/LifeCycleA';
function App() {
  
  return (
    <div className="App">

        <PostForm/>
        {/* <PostList/> */}

      {/* <UserProvider value='Juan'> */}
          {/* <ComponentC /> */}
      {/* </UserProvider> */}
   
      {/* <CounterTwo>
        {(count, incrementCount) =>(
          <ClickCounterTwo count={count} incrementCount={incrementCount}/>
        )}
      </CounterTwo>
       <CounterTwo>
          {(count, incrementCount) =>(
            <HoverCounterTwo count={count} incrementCount={incrementCount}/>
          )}
      </CounterTwo> */}
      {/* <ClickCounterTwo/>
      <HoverCounterTwo/>
      <User render={(isLoggedIn)=> isLoggedIn ? 'Juan' : 'Guest'}/> */}
      {/* <ClickCounter/>
      <HoverCounter/> */}
      {/* <ErrorBoundary>
        
        <Hero heroName='Superman'/>
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName='Batman'/>
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName='Joker'/>
      </ErrorBoundary> */}
      
      {/* <PortalDemo/> */}

      {/* <FocusInput/> */}
      {/* <RefsDemo /> */}

      {/* <ParentComp/> */}
      {/* <PureComp/> */}
      {/* <Table /> */}
      {/* <FragmentDemo/> */}
       {/* <LifeCycleA/> */}
      {/* <Form/> */}

      {/* <h1 className='error'>Error</h1>
      <h1 className={styles.success}>Success</h1>
      <Inline/> */}
      {/* <NameList/> */}
    {/* <StyleSheets primary={true}/> */}

      {/* <UserGreeting/> */}
      {/* <ParentComponent/> */}
    {/* <EventBind/> */}
      {/* <Counter/> */}
      {/* <FunctionClick />
      <ClassClick/> */}

      
      {/* <Message /> */}
     {/* <Greet name="Bruce" heroName="Batman"> 
        <p> This is children props</p>
      </Greet>
      <Welcome name="Bruce" heroName="Batman"/> */}
      {/* <Greet name="Clark" heroName="Superman">
       <button>Action</button>
      </Greet>
      <Greet name="Diana" heroName="Wonder Woman"/>
      <Welcome name="Bruce" heroName="Batman"/>
      <Welcome name="Bruce" heroName="Batman"/>
      <Welcome name="Bruce" heroName="Batman"/> */}
       
    </div>
  );
}

export default App;
