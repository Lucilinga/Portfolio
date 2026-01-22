import svgPaths from "./svg-ffe2y75wzn";

function ButtonTransparentRegularActive() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center px-[12px] py-[6px] relative rounded-[9999px] shrink-0" data-name="Button/Transparent/Regular/Active">
      <p className="css-ew64yg font-['Source_Serif_Pro:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#303030] text-[16px] text-center">Study cases</p>
    </div>
  );
}

function ButtonTransparentRegularActive1() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center px-[12px] py-[6px] relative rounded-[9999px] shrink-0" data-name="Button/Transparent/Regular/Active">
      <p className="css-ew64yg font-['Source_Serif_Pro:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#303030] text-[16px] text-center">For fun cases</p>
    </div>
  );
}

function ButtonTransparentRegularActive2() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center px-[12px] py-[6px] relative rounded-[9999px] shrink-0" data-name="Button/Transparent/Regular/Active">
      <p className="css-ew64yg font-['Source_Serif_Pro:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#303030] text-[16px] text-center">LinkedIn</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0">
      <ButtonTransparentRegularActive />
      <ButtonTransparentRegularActive1 />
      <ButtonTransparentRegularActive2 />
    </div>
  );
}

function ArrowsChevronArrowLeft() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Arrows-chevron/Arrow-Left">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Arrows-chevron/Arrow-Left">
          <path d={svgPaths.p33ca7d00} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function ArrowsChevronArrowRight() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Arrows-chevron/Arrow-Right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Arrows-chevron/Arrow-Right">
          <path d={svgPaths.p2fadd580} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#0d7d7b] content-stretch flex gap-[4px] items-center justify-center px-[12px] py-[6px] relative rounded-[9999px] shrink-0" data-name="Button">
      <ArrowsChevronArrowLeft />
      <p className="css-ew64yg font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[14px] text-center text-white tracking-[-0.14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Stay in touch
      </p>
      <ArrowsChevronArrowRight />
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute bg-white content-stretch flex items-center justify-between left-[63px] top-[32px] w-[1154px]">
      <Frame />
      <Button />
    </div>
  );
}

function Intro() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[32px] items-center leading-[normal] left-[409px] text-black text-center top-[244px] w-[461px]" data-name="Intro">
      <p className="css-4hzbpn font-['Source_Serif_Pro:SemiBold_Italic',sans-serif] italic relative shrink-0 text-[32px] w-full">hola!</p>
      <div className="font-['Instrument_Sans:Regular',sans-serif] font-normal relative shrink-0 text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="css-4hzbpn mb-0">{`I’m based in México City working at Etsy as Senior Product Designer. I advocate for designing effective experiences that make people & business satisfied and under a unified goal.`}</p>
        <p className="css-4hzbpn mb-0">&nbsp;</p>
        <p className="css-4hzbpn">{`Outside work you’ll find me painting, seeking for the best coffee in town and taking long walks. `}</p>
      </div>
    </div>
  );
}

export default function MacBookAir() {
  return (
    <div className="bg-white relative size-full" data-name="MacBook Air - 1">
      <p className="absolute css-ew64yg font-['Instrument_Sans:Medium',sans-serif] font-medium leading-[normal] left-1/2 text-[280px] text-black text-center top-[560px] tracking-[-14px] translate-x-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        i’m lucila
      </p>
      <Frame1 />
      <Intro />
    </div>
  );
}