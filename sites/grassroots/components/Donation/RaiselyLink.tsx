export const RaiselyLink = ({ cta = false }) => (
  <div className={`${cta ? 'bg-white text-center' : 'bg-green-200'} p-4 rounded-md cursor-pointer`}>
    <a
      href="https://grassroots-future.raisely.com"
      target="_blank"
    >
      Support our crowdfunding campaign on Raisely:{" "}
      {cta && (<div className="text-xl animate-bounce pt-2">👇</div>) }
      
      <div className="bg-green-200 py-2 rounded">
        <span className="underline">
        https://grassroots-future.raisely.com
        </span>
      </div>
      
    </a>
  </div>
)