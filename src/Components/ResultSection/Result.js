import React from 'react';
import './Result.css';
import logo from '../../Assests/favicon1.svg';
import failed from '../../Assests/cancel.png';

export default function Result(props) {

  let status = '404';

  if (status === '404' || status !== 201) {
    return (
      <section className="result-wrapper">
        <div className="logo_section w-full h-10 mb-10 absolute">
          <div className="logo h-10 flex mr-10 sm:mr-20 md:mr-40">
            <img src={logo} className="w-10 h-10 mx-2" alt="logo" />
            <h4 className="text-sm sm:text-base md:text-lg">skgupta6386@gmail.com</h4>
            {/* 
            { 
              if(props.status === 'false') {
                <img src={failed} className="w-8 h-8 mb-2" alt="failed" />
              }
            } 
            */}
          </div>
        </div>
        <div className="result wrapper mx-5 my-20 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="result__field">
            <div className="field__label">Username</div>
            {/* <div className="field__data"><p>{username}</p></div> */}
          </div>
          <div className="result__field">
            <div className="field__label">Mail Deliverable</div>
            {/* <div className="field__data"><p>{Mail_deliverable}</p></div> */}
          </div>
          <div className="result__field">
            <div className="field__label">Domain</div>
            {/* <div className="field__data"><p>{Domain}</p></div> */}
          </div>
          <div className="result__field">
            <div className="field__label">Inbox full</div>
            {/* <div className="field__data"><p>{Inbox_full}</p></div> */}
          </div>
          <div className="result__field">
            <div className="field__label">Syntax Valid</div>
            {/* <div className="field__data"><p>{Syntax_valid}</p></div> */}
          </div>
          <div className="result__field">
            <div className="field__label">Free Account</div>
            {/* <div className="field__data"><p>{free_acc}</p></div> */}
          </div>
          <div className="result__field">
            <div className="field__label">SMTP PROVIDER</div>
            {/* <div className="field__data"><p>{false}</p></div> */}
          </div>
          <div className="result__field">
            <div className="field__label">MX FOUND</div>
            {/* <div className="field__data"><p>{mx_found}</p></div> */}
          </div>
          <div className="result__field">
            <div className="field__label">MX RECORD</div>
            {/* <div className="field__data"><p>{mx_record}</p></div> */}
          </div>
        </div>
      </section>
    );
  } else {
    return (
      <section className="result-wrapper">
      </section>
    );
  }
}
