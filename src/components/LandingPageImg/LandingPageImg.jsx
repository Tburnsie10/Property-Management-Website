import React from "react";

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function LandingPageImg() {
  return (
    <div className="container">
      <div>
        <img
          src="https://www.iowacabinrentals.com/wp-content/uploads/2018/07/b7b1df93-da8d-43a6-9cef-df43c7eef0b8.jpg"
          style={{
            height: 400,
            width: 600,
          }}
        />
      </div>
    </div>
  );
}

export default LandingPageImg;
