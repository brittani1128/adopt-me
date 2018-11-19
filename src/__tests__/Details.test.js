import React from "react";
import { create } from "react-test-renderer";
import Details from "../Details";
const match = {
  params: {
    id: 1234
  }
};

//Some basic tests for the details page

test("snapshot", () => {
  const c = create(<Details match={match} />);
  expect(c.toJSON()).toMatchSnapshot();
});

test("shows modal when toggleModal is called", () => {
  const c = create(<Details match={match} search={() => {}} />);

  //create instance of particular element
  const instance = c.getInstance();

  //on construction expect not to show modal
  expect(instance.state.showModal).toBe(false);
  //after calling toggleModal, expect to be true
  instance.toggleModal();
  expect(instance.state.showModal).toBe(true);
});
