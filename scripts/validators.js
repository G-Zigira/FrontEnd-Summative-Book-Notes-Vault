export const patterns = {
  title: /^\S(?:.*\S)?$/,
  author: /^[A-Za-z]+(?:[ -][A-Za-z]+)*$/,
  pages: /^(0|[1-9]\d*)$/,
  tag: /^[A-Za-z]+(?:[ -][A-Za-z]+)*$/,
  date: /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/,
  advanced: /\b(\w+)\s+\1\b/
};

export const validate = (field, value) =>
  patterns[field].test(value);
