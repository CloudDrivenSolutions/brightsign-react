function App() {
  return (
    <div className="flex flex-col overflow-hidden">
      <p>BrightSign Test</p>
      <div className="mx-2 mt-4 border-2 border-red-700">
        <video width="1366" height="768">
          <source src="tv:brightsign.biz/hdmi" />
        </video>
      </div>
    </div>
  );
}

export default App;
