export const hasNamedSlot = (slotName, children) => {
    console.log(slotName, children);
    return Array.isArray(children)
        ? [
              children.filter((child) => {
                  return child.props.slot === `${slotName}`;
              })[0],
              children.filter((child) => {
                  return child.props.slot !== `${slotName}`;
              }),
          ]
        : [false, children];
};
