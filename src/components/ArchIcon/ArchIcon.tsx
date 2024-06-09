import React from 'react';
import Warp from 'warpjs';
import './ArchIcon.scss';
import classNames from 'classnames';

export interface ArchIconProps {
  className?: string;
  amplitude?: number;
  icon: string;
}

const ArchIcon = ({
  className,
  amplitude = 0,
  icon: Icon,
}: ArchIconProps): React.ReactElement => {
  // Storing the div element
  const divRef = React.useRef<HTMLDivElement>(null);
  // Storing the previous amplitude
  const previousAmplitudeRef = React.useRef<number>(0);

  React.useEffect(() => {
    // Return if no icon is provided
    if (!Icon) return;
    // Get the current svg element inside the div element
    const svgElement = divRef.current!.firstChild!;
    // Get the width of the path element inside the svg element
    const { width } =
      (svgElement.firstChild as SVGPathElement)!.getBoundingClientRect();
    // Create an instance of the wrap class using the svgElement
    const warp = new Warp(svgElement);
    // Transform all points of the svg to be in a new position
    warp.transform(([x, y]) => [
      // x position is left unchanged as we only want to change the y position for building the arch effect
      x,
      // y position + amplitude of the wave * sine value of the current position of x in the wave
      // as we are using the width of the svg as the period of the wave, it will create
      // an arc from the beginning to the end of the svg
      y +
        (previousAmplitudeRef.current - amplitude) *
          Math.sin((x / width) * Math.PI),
    ]);
    // Storing the new amplitude
    previousAmplitudeRef.current = amplitude;
  }, [Icon, amplitude]);

  return (
    <div className={classNames('ArchIcon__icon', className)} ref={divRef}>
      {Icon && <Icon />}
    </div>
  );
};

export default ArchIcon;
