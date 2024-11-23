import { ArrowOutward } from '@mui/icons-material';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

function ServiceCard({ item }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`w-[25vmax] hover:scale-[1.05] p-5 relative overflow-hidden transition-all duration-300 ease-in-out ${isHovered ? 'bg-primary text-white' : 'bg-white text-textColor'
        } rounded-lg`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={!isHovered ? item.icon1 : item.icon2}
        alt={item.title}
        width={60}
        className={`rounded-full border border-solid transition-all duration-300 ease-in-out ${isHovered ? 'bg-primary border-white' : 'bg-white border-primary'
          } p-2`}
      />
      <h3 className="font-PrimaryFont font-bold text-[1.2vmax] my-4">{item.title}</h3>
      <p className="font-PrimaryFont text-[0.8vmax] font-medium">{item.description}</p>
      <div className="flex justify-end items-center pt-8">
        <motion.div
          className={`w-12 h-12 hover:text-secondary flex items-center justify-center ${isHovered ? 'bg-white text-primary' : 'bg-primary text-white'} rounded-full shadow-lg transform transition-all duration-100 hover:scale-110 hover:shadow-xl`}
          whileHover={{
            scale: 1.2,
            rotate: 45,
            boxShadow: '0px 0px 12px rgba(0, 0, 0, 0.2)',
          }}
          animate={{
            rotate: isHovered ? 45 : 0,
          }}
          transition={{
            type: 'spring',
            stiffness: 200,
            damping: 20,
          }}
        >
          <ArrowOutward
            className="text-[1.5rem] transition-colors duration-300"
          />
        </motion.div>
      </div>

    </div>
  );
}

export default ServiceCard;
