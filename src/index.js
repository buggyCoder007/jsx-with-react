import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetails from "./components/CommentDetails";
import ApprovalCard from "./components/ApprovalCard";
const App = () => {
  return (
    <div className="ui-container-comments">
      <ApprovalCard>
        <CommentDetails
          name="sam"
          date="today at 6:00 am"
          comment="Nice blog post"
          img={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetails
          name="dan"
          date="tommo at 2:00 am"
          comment="I love the subject"
          img={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetails
          name="ben"
          date="yesterday at 4:00 pm"
          comment="Wow, nice cover"
          img={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
