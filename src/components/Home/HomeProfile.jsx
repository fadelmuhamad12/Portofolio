import React from "react";

const HomeProfile = (props) => {
  return (
    <div>
      <img
        src={props.profile}
        className="rounded-2xl mx-auto w-2/3 mt-5 md:w-full xl:my-0"
      />
    </div>
  );
};

export default HomeProfile;
