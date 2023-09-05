export { default } from './Offline';

export default function Offline({ children }) {
    return (
      <>
        <div className="offline" />
        {children}
      </>
    );
  }