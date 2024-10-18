import HeaderBox from '@/components/HeaderBox'
import RightSideBar from '@/components/RightSideBar';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import React from 'react'

const Home = () => {
    const loggedin = {firstName: 'Adarsh', lastName:"Shetty", email:"adarsh@gmail.com"};

  return (
    <section className="home">
      <div className='home-content'>
        <header className="home-header">
            <HeaderBox
            type='greeting'
            title='Welcome'
            user={loggedin?.firstName || 'GUEST'}
            subtext="Access and manage your account and transaction efficiently"
            />
            <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.9}
            />
        </header>
        Recent transactions
      </div>
      <RightSideBar
      user={loggedin}
      transactions={[]}
      banks={[{currentBalance:123.50},{currentBalance:500}]}
      />
    </section>
  )
}

export default Home
