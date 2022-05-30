type ClickEvent = {
  action: 'click';
  category: 'other';
};

type GtagEvent = (ContactEvent | ClickEvent) & {
  label?: Record<string, string | number | boolean>;
  value?: string;
};

export default GtagEvent;
