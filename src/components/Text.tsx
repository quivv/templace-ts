import { useCallback, useEffect, useState } from "react";

type TextProps = {
  title: string;
  body?: string;
  childCoponent?: React.ReactElement;
  onClick?: (data: string) => void;
  enum?: 'text' | 'number' | 'func';
  data?: string | number;
  onChange?: (data: string) => void;
}

export function Text(props: TextProps): React.ReactElement {
  const { title, body, childCoponent, onChange } = props;
  const [data, setData] = useState<string>('');
  const [text, setText] = useState<string>('');
  

  useEffect(() => {
    onChange?.(data);
    console.log('useEffect1 ' + data);
  }, [data, onChange]);

  const inputHandler = useCallback(
    (data: string) => {
      onChange?.(data);
      console.log('inputHandler ' + data);
      setText(data);
    },
    [onChange],
  );
  

  return (<div>
    <h1>{title}</h1>
    <p>{body}</p>
    {childCoponent}
    <button onClick={() => setData(new Date().getTime().toString())}>test</button>
    <button onClick={() => setData('button2')}>test2</button>
    <input type={'text'} value={text} onChange={(e) => inputHandler(e.target.value)}></input>
  </div>)
}