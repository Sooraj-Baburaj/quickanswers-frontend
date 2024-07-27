import Avatar from "@/src/components/ui/Avatar";
import Button from "@/src/components/ui/Button";
import React from "react";

const Comments = () => {
  return (
    <div className="w-full relative pb-3xl">
      {/* title */}
      <h4 className="w-full text-xl font-semibold mb-xl">Comments</h4>

      {/* container */}
      <div className="w-full relative flex flex-col bg-[#F1FBF9] p-xl rounded-md border-t border-t-primary-border">
        {/* comment group */}
        <div className="w-full relative">
          <div className="w-full relative flex flex-col pb-xl last:pb-[0] pl-[40px] first:pl-[0] group">
            <span className="w-[20px] translate-x-[10px] mb-[24px] absolute after:w-[3px] after:h-[40px] after:bg-primary-border after:left-[-3px] after:absolute after:top-[-40px] border-l-[3px] h-[calc(100%-25px)] rounded-bl-[15px]  border-l-primary-border border-b-[3px] border-b-primary-border flex bottom-[-40px] left-[0] group-first:after:hidden group-last:hidden"></span>
            <Avatar />
            <div className="w-full pl-[46px]">
              <p className="w-full text-md mt-md max-w-[600px]">
                But I must explain to you how all this mistaken idea of
                denouncing pleasure and praising pain was born and I will give
                you a complete account of the system, and expound the actual
                teachings of the great explorer of the truth,{" "}
              </p>
              <div className="w-full relative flex items-start mt-lg">
                <Button className="px-lg w-auto text-md h-[32px] min-w-[53px] flex justify-center items-center rounded-full border border-[#E8E4EB]">
                  Reply
                </Button>
              </div>
            </div>
          </div>

          {/* reply comment */}
          <div className="w-full relative flex flex-col pb-xl last:pb-[0] pl-[40px] first:pl-[0] group">
            <span className="w-[20px] translate-x-[10px] mb-[24px] absolute after:w-[3px] after:h-[40px] after:bg-primary-border after:left-[-3px] after:absolute after:top-[-40px] border-l-[3px] h-[calc(100%-25px)] rounded-bl-[15px]  border-l-primary-border border-b-[3px] border-b-primary-border flex bottom-[-40px] left-[0] group-first:after:hidden group-last:hidden"></span>
            <Avatar />
            <div className="w-full pl-[46px]">
              <p className="w-full text-md mt-md max-w-[600px]">
                But I must explain to you how all this mistaken idea of
                denouncing pleasure and praising pain was born and I will give
                you a complete account of the system, and expound the actual
                teachings of the great explorer of the truth,{" "}
              </p>
              <div className="w-full relative flex items-start mt-lg">
                <Button className="px-lg w-auto text-md h-[32px] min-w-[53px] flex justify-center items-center rounded-full border border-[#E8E4EB]">
                  Reply
                </Button>
              </div>
            </div>
          </div>

          <div className="w-full relative flex flex-col pb-xl last:pb-[0] pl-[40px] first:pl-[0] group">
            <span className="w-[20px] translate-x-[10px] mb-[24px] absolute after:w-[3px] after:h-[40px] after:bg-primary-border after:left-[-3px] after:absolute after:top-[-40px] border-l-[3px] h-[calc(100%-25px)] rounded-bl-[15px]  border-l-primary-border border-b-[3px] border-b-primary-border flex bottom-[-40px] left-[0] group-first:after:hidden group-last:hidden"></span>
            <Avatar />
            <div className="w-full pl-[46px]">
              <p className="w-full text-md mt-md max-w-[600px]">
                But I must explain to you how all this mistaken idea of
                denouncing pleasure and praising pain was born and I will give
                you a complete account of the system, and expound the actual
                teachings of the great explorer of the truth,{" "}
              </p>
              <div className="w-full relative flex items-start mt-lg">
                <Button className="px-lg w-auto text-md h-[32px] min-w-[53px] flex justify-center items-center rounded-full border border-[#E8E4EB]">
                  Reply
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* comment section */}
        <form className="w-full relative flex flex-col mt-xl">
          <textarea
            placeholder="Enter you comment"
            className="p-lg rounded-md border border-[#CBC6C6] bg-[#fff] resize-none"
          ></textarea>
          <div className="w-full flex space-x-lg pt-lg justify-end">
            <Button type="secondary">Generate Comment</Button>
            <Button type="primary">Post Comment</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Comments;
