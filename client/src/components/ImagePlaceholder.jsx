// Drop-in image slot.
//
// While you don't have a real photo yet, this renders a labelled dashed box so
// the layout is complete. When you're ready:
//   1. Put the image file in  client/public/images/  (e.g. hero.png)
//   2. Pass its path:  <ImagePlaceholder src="/images/hero.png" alt="..." />
//
// Props:
//   src       - image URL; when omitted the placeholder box is shown
//   alt       - alt text (required once src is set)
//   label     - text shown inside the empty box
//   aspect    - CSS aspect-ratio, e.g. "4/3", "16/9", "1/1"  (default "4/3")
//   className - extra classes on the wrapper

export default function ImagePlaceholder({
  src,
  alt = '',
  label = 'Image',
  aspect = '4/3',
  className = '',
}) {
  const style = { aspectRatio: aspect };

  if (src) {
    return (
      <img
        src={src}
        alt={alt}
        loading="lazy"
        style={style}
        className={`w-full object-cover rounded-2xl ${className}`}
      />
    );
  }

  return (
    <div
      style={style}
      className={`w-full rounded-2xl border-2 border-dashed border-hairline
                  bg-sand text-stone/60 flex flex-col items-center
                  justify-center gap-1 text-center px-4 ${className}`}
    >
      <span className="text-sm font-medium">{label}</span>
      <span className="text-xs">Add an image to client/public/images/</span>
    </div>
  );
}
