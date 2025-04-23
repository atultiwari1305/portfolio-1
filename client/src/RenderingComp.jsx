export default function RenderingComp() {
    throw new Error("This is an exceptional error from the main Component. Check log files");
    return <div>This will never be shown</div>;
  }
  