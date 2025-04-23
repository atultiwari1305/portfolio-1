export default function BrokenComponent() {
    throw new Error("This is an intentional error from BrokenComponent.");
    return <div>This will never be shown</div>;
  }
  