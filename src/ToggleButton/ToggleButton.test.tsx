/**
 * @file ToggleButton.test.tsx
 * @brief ToggleButton tests
 *
 * @copyright Copyright (c) 2022 Istituto Italiano di Tecnologia
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

// Imports a specific story for the test
import { toggleButtonClasses as classes } from "@mui/material/ToggleButton";
import { composeStories } from "@storybook/react";
import * as stories from "./ToggleButton.stories";
import userEvent from "@testing-library/user-event";

// Every component that is returned maps 1:1 with the stories, but they already contain all decorators from story level, meta level and global level.
const { Default, Size } = composeStories(stories);

// This tests is not relevant and is here only for coverage.
// The stability of this component is tested by MUI devs.
describe("ToggleButton", () => {
  const testToggle = async (button: HTMLElement) => {
    expect(button).not.toHaveClass(classes.selected);
    await userEvent.click(button);
    expect(button).toHaveClass(classes.selected);
    await userEvent.click(button);
    expect(button).not.toHaveClass(classes.selected);
  };

  // Test render of default element
  it("should render the default element correctly", async () => {
    render(<Default />);
    expect(screen.getByRole("button")).toBeInTheDocument();
    testToggle(screen.getByRole("button"));
  });

  // This tests is not relevant and is here only for coverage.
  // The stability of this component is tested by MUI devs.
  it("should render correctly all sizes and properties", async () => {
    render(<Size />);

    const buttonSizes = ["large", "medium", "small"];
    const buttonTypes = [
      "standard",
      "primary",
      "secondary",
      "error",
      "info",
      "success",
      "warning",
      "disabled"
    ];

    // test all sizes
    buttonTypes.forEach((type) =>
      expect(screen.getByTestId("large-" + type)).toHaveClass(classes.sizeLarge)
    );
    buttonTypes.forEach((type) =>
      expect(screen.getByTestId("medium-" + type)).toHaveClass(
        classes.sizeMedium
      )
    );
    buttonTypes.forEach((type) =>
      expect(screen.getByTestId("small-" + type)).toHaveClass(classes.sizeSmall)
    );

    // test all properties
    buttonSizes.forEach((size) => {
      expect(screen.getByTestId(size + "-standard")).toHaveClass(
        classes.standard
      );
      expect(screen.getByTestId(size + "-primary")).toHaveClass(
        classes.primary
      );
      expect(screen.getByTestId(size + "-secondary")).toHaveClass(
        classes.secondary
      );
      expect(screen.getByTestId(size + "-error")).toHaveClass("Mui-error");
      expect(screen.getByTestId(size + "-info")).toHaveClass(
        "MuiToggleButton-info"
      );
      expect(screen.getByTestId(size + "-success")).toHaveClass(
        "MuiToggleButton-success"
      );
      expect(screen.getByTestId(size + "-warning")).toHaveClass(
        "MuiToggleButton-warning"
      );
      expect(screen.getByTestId(size + "-disabled")).toHaveProperty(
        "disabled",
        true
      );
    });

    // test button presses
    buttonSizes.forEach(async (size) => {
      testToggle(screen.getByTestId(size + "-standard"));
      testToggle(screen.getByTestId(size + "-primary"));
      testToggle(screen.getByTestId(size + "-secondary"));
      testToggle(screen.getByTestId(size + "-error"));
      testToggle(screen.getByTestId(size + "-info"));
      testToggle(screen.getByTestId(size + "-success"));
      testToggle(screen.getByTestId(size + "-warning"));
      expect(screen.getByTestId("large-disabled")).not.toHaveClass(
        classes.selected
      );
      await userEvent.click(screen.getByTestId("large-disabled"));
      expect(screen.getByTestId("large-disabled")).not.toHaveClass(
        classes.selected
      );
    });
  });
});
