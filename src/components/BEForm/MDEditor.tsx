import { SimpleMdeToCodemirrorEvents } from "react-simplemde-editor";
import { useMemo } from "react";
import SimpleMDE from "easymde";
import React from "react";
import "easymde/dist/easymde.min.css";
import dynamic from "next/dynamic";

const SimpleMdeEditor = dynamic(() => import("react-simplemde-editor"), {
  ssr: false,
});

type Props = {
  value: string;
  onInputChange: (value: string) => void;
  className?: string;
};

const events = {
  focus: () => {},
} as SimpleMdeToCodemirrorEvents;

const TextEditor = (props: Props) => {
  const { value, onInputChange, className } = props;

  const onChange = (value: string) => {
    onInputChange(value);
  };

  const autofocusNoSpellcheckerOptions = useMemo(() => {
    return {
      autofocus: true,
      spellChecker: false,
    } as SimpleMDE.Options;
  }, []);

  return (
    <>
      <div className={className}>
        <SimpleMdeEditor
          value={value}
          onChange={onChange}
          options={autofocusNoSpellcheckerOptions}
          events={events}
        />
      </div>
    </>
  );
};

export default TextEditor;
