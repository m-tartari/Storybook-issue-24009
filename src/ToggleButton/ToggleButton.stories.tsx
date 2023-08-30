/**
 * @file ToggleButton.stories.tsx
 * @brief MUI ToggleButton stories
 *
 * @copyright Copyright (c) 2022 Istituto Italiano di Tecnologia
 *
 */

import React from "react";
import { Box } from "@mui/material";
import { StoryFn, Meta } from "@storybook/react";
import { ToggleButton } from "components/atoms";

export default {
  title: "Atoms/Buttons/Toggle",
  component: ToggleButton,
  argTypes: {
    size: {
      type: "string",
      options: ["large", "medium", "small"],
      control: { type: "select" }
    },
    color: {
      type: "string",
      options: [
        "standard",
        "primary",
        "secondary",
        "error",
        "info",
        "success",
        "warning"
      ],
      control: { type: "select" }
    },
    selected: { type: "boolean" },
    disabled: { type: "boolean" }
  }
} as Meta<typeof ToggleButton>;

const Template: StoryFn<typeof ToggleButton> = ({ children, ...args }) => {
  const [selected, setSelected] = React.useState<boolean>(
    args.selected || false
  );

  return (
    <ToggleButton
      selected={selected}
      onChange={() => setSelected(!selected)}
      {...args}
    >
      {children}
    </ToggleButton>
  );
};

// Default
export const Default = Template.bind({});
Default.args = { value: "something", children: "Toggle" };

// Show multiple buttons at onceinterface Props {}
const Div: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Box
      component="div"
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: "5px",
        marginTop: "-5px",
        marginBottom: "-5px"
      }}
    >
      {children}
    </Box>
  );
};

const TemplateVariant: StoryFn<typeof ToggleButton> = ({
  disabled,
  size,
  ...args
}) => {
  const [selected, setSelected] = React.useState<boolean>(
    args.selected || false
  );

  return (
    <div>
      <Div>
        <ToggleButton
          {...args}
          size="large"
          data-testid="large-standard"
          selected={selected}
          onChange={() => setSelected(!selected)}
        >
          Default
        </ToggleButton>
        <ToggleButton
          {...args}
          size="large"
          color="primary"
          data-testid="large-primary"
          selected={selected}
          onChange={() => setSelected(!selected)}
        >
          Primary
        </ToggleButton>
        <ToggleButton
          {...args}
          size="large"
          color="secondary"
          data-testid="large-secondary"
          selected={selected}
          onChange={() => setSelected(!selected)}
        >
          Secondary
        </ToggleButton>
        <ToggleButton
          {...args}
          size="large"
          color="error"
          data-testid="large-error"
          selected={selected}
          onChange={() => setSelected(!selected)}
        >
          Error
        </ToggleButton>
        <ToggleButton
          {...args}
          size="large"
          color="info"
          data-testid="large-info"
          selected={selected}
          onChange={() => setSelected(!selected)}
        >
          Info
        </ToggleButton>
        <ToggleButton
          {...args}
          size="large"
          color="success"
          data-testid="large-success"
          selected={selected}
          onChange={() => setSelected(!selected)}
        >
          Success
        </ToggleButton>
        <ToggleButton
          {...args}
          size="large"
          color="warning"
          data-testid="large-warning"
          selected={selected}
          onChange={() => setSelected(!selected)}
        >
          Warning
        </ToggleButton>
        <ToggleButton
          size="large"
          data-testid="large-disabled"
          disabled
          {...args}
        >
          Disabled
        </ToggleButton>
      </Div>
      <br />
      <Div>
        <ToggleButton
          {...args}
          data-testid="medium-standard"
          selected={selected}
          onChange={() => setSelected(!selected)}
        >
          Default
        </ToggleButton>
        <ToggleButton
          {...args}
          color="primary"
          data-testid="medium-primary"
          selected={selected}
          onChange={() => setSelected(!selected)}
        >
          Primary
        </ToggleButton>
        <ToggleButton
          {...args}
          color="secondary"
          data-testid="medium-secondary"
          selected={selected}
          onChange={() => setSelected(!selected)}
        >
          Secondary
        </ToggleButton>
        <ToggleButton
          {...args}
          color="error"
          data-testid="medium-error"
          selected={selected}
          onChange={() => setSelected(!selected)}
        >
          Error
        </ToggleButton>

        <ToggleButton
          {...args}
          color="info"
          data-testid="medium-info"
          selected={selected}
          onChange={() => setSelected(!selected)}
        >
          Info
        </ToggleButton>
        <ToggleButton
          {...args}
          color="success"
          data-testid="medium-success"
          selected={selected}
          onChange={() => setSelected(!selected)}
        >
          Success
        </ToggleButton>
        <ToggleButton
          {...args}
          color="warning"
          data-testid="medium-warning"
          selected={selected}
          onChange={() => setSelected(!selected)}
        >
          Warning
        </ToggleButton>
        <ToggleButton {...args} data-testid="medium-disabled" disabled>
          Disabled
        </ToggleButton>
      </Div>
      <br />
      <Div>
        <ToggleButton
          {...args}
          size="small"
          data-testid="small-standard"
          selected={selected}
          onChange={() => setSelected(!selected)}
          {...args}
        >
          Default
        </ToggleButton>
        <ToggleButton
          {...args}
          size="small"
          color="primary"
          data-testid="small-primary"
          selected={selected}
          onChange={() => setSelected(!selected)}
        >
          Primary
        </ToggleButton>
        <ToggleButton
          {...args}
          size="small"
          color="secondary"
          data-testid="small-secondary"
          selected={selected}
          onChange={() => setSelected(!selected)}
        >
          Secondary
        </ToggleButton>
        <ToggleButton
          {...args}
          size="small"
          color="error"
          data-testid="small-error"
          selected={selected}
          onChange={() => setSelected(!selected)}
        >
          Error
        </ToggleButton>
        <ToggleButton
          {...args}
          size="small"
          color="info"
          data-testid="small-info"
          selected={selected}
          onChange={() => setSelected(!selected)}
        >
          Info
        </ToggleButton>
        <ToggleButton
          {...args}
          size="small"
          color="success"
          data-testid="small-success"
          selected={selected}
          onChange={() => setSelected(!selected)}
        >
          Success
        </ToggleButton>
        <ToggleButton
          {...args}
          size="small"
          color="warning"
          data-testid="small-warning"
          selected={selected}
          onChange={() => setSelected(!selected)}
        >
          Warning
        </ToggleButton>
        <ToggleButton
          {...args}
          size="small"
          data-testid="small-disabled"
          disabled
        >
          Disabled
        </ToggleButton>
      </Div>
    </div>
  );
};

export const Size = TemplateVariant.bind({});
Size.args = { value: "sample-value" };
