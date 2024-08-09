import React from "react";

// recursive function to reduce a code block made of spans into a single string
export function getTextContent(children: React.ReactNode): string {
  return React.Children.toArray(children).reduce(
    (text: String, child: React.ReactNode) => {
      if (typeof child === "string") {
        return text + child;
      }
      if (React.isValidElement(child) && child.props.children) {
        return text + getTextContent(child.props.children);
      }
      return text.toString();
    },
    "",
  );
}
