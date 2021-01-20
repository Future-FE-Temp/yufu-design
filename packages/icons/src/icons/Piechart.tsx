import BaseIcon, { IconProps } from '../components/BaseIcon';

const PiechartSvg = () => (
  <svg>
    <defs>
      <style type="text/css" />
    </defs>
    <path
      d="M448 65.856a490.688 490.688 0 0 1 531.52 531.52H915.2A426.752 426.752 0 0 1 64 554.624c0-221.248 168.384-403.2 384-424.576V65.792z m0 531.456V216A341.376 341.376 0 0 0 490.688 896c171.968 0 317.12-128 338.688-298.688H448zM893.76 512a405.44 405.44 0 0 0-360.448-360.448V512h360.448z"
      p-id="12452"
    />
  </svg>
);

const Piechart = (props: IconProps) => <BaseIcon component={PiechartSvg} {...props} />;

export default Piechart;
