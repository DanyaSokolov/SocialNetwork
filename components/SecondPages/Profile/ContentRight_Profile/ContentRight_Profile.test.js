import React from "react";
import { create, render, screen } from "react-test-renderer";
import ContentRight_Profile from "./ContentRight_Profile.jsx"; 

  describe("Profile component", () => {
    test("Status correct", () => {
      const component = create(<ContentRight_Profile status="Hi" />);
      const instance = component.root;
      expect(instance.state).toBe(state);
    });
  });