export const DonationLink = ({ cta = false }) => (
  <div className={`${cta ? 'bg-white text-center' : 'bg-green-200'} p-4 rounded-md cursor-pointer`}>
    <a
      href="https://give.asia/charity/grassroots-future"
      target="_blank"
    >
      Support our crowdfunding campaign!{" "}
      {cta && (<div className="text-xl animate-bounce pt-2">👇</div>)}

      <div className="bg-green-200 py-2 rounded">
        <span className="underline">
          https://give.asia/charity/grassroots-future
        </span>
      </div>

    </a>
  </div>
)