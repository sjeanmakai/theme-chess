import React from "react";
import { useSetRecoilState } from "recoil";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import { themeState } from "../state/atoms/themeState";
import styled from "styled-components";

const ThemeDropdownContainer = styled.div`
  margin-bottom: 1%;
`;

export const ThemeDropdown: React.FC = ({}) => {
  const setTheme = useSetRecoilState(themeState);

  return (
    <ThemeDropdownContainer>
      <DropdownButton
        id="dropdown-basic-button"
        title="Choose Theme"
        variant="secondary"
      >
        <Dropdown.Item
          onClick={(_) => {
            setTheme({
              theme: "Classic",
              darkVariant: "#5C4033",
              lightVariant: "#C4A484",
            });
          }}
        >
          Classic Chess
        </Dropdown.Item>
        <Dropdown.Item
          onClick={(_) => {
            setTheme({
              theme: "Bubble Gum",
              darkVariant: "pink",
              lightVariant: "white",
            });
          }}
        >
          Bubble Gum Chess
        </Dropdown.Item>

        <Dropdown.Item
          onClick={(_) => {
            setTheme({
              theme: "Ocean",
              darkVariant: "#7fcdff",
              lightVariant: "#def3f6",
            });
          }}
        >
          Ocean Chess
        </Dropdown.Item>
        <Dropdown.Item
          onClick={(_) => {
            setTheme({
              theme: "Danger",
              darkVariant: "#000000",
              lightVariant: "#ff0000",
            });
          }}
        >
          Danger Chess
        </Dropdown.Item>
        <Dropdown.Item
          onClick={(_) => {
            setTheme({
              theme: "Regal",
              darkVariant: "#000000",
              lightVariant: "#ccac00",
            });
          }}
        >
          Regal Chess
        </Dropdown.Item>
      </DropdownButton>
    </ThemeDropdownContainer>
  );
};
