import React from "react";

import CustomButton from "./CustomButton";

const AIPicker = ({ propmt, setPrompt, generatingImg, handleSubmit }) => {
   return (
      <div className="aipicker-container">
         <textarea
            placeholder="Ask AI ..."
            rows={5}
            value={propmt}
            onChange={(e) => setPrompt(e.target.value)}
            className="aipicker-textarea"
         />
         <div className="flex flex-wrap gap-3 ">
            {generatingImg ? (
               <CustomButton
                  type="outline"
                  title="Asking AI..."
                  customStyles="text-xs"
               />
            ) : (
               <>
                  <CustomButton
                     type="outliene"
                     title=" AI Logo"
                     handleClick={() => handleSubmit("logo")}
                     customStyles="text-xs"
                  />

                  <CustomButton
                     type="filled"
                     title=" AI Full"
                     handleClick={() => handleSubmit("full")}
                     customStyles="text-xs"
                  />
               </>
            )}
         </div>
      </div>
   );
};

export default AIPicker;
