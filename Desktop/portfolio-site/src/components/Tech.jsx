import { BallCanvas } from './canvas';
import { technologies } from '../constants';

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}> 
          <BallCanvas icon={technology.icon} name={technology.name} />
          <div className="text-center text-[11px]">
            <div className=" text-white p-2 rounded">
              {technology.name}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Tech