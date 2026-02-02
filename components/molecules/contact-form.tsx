import {
  GpuIcon,
  SparkleIcon,
  SparklesIcon,
  SunMoonIcon,
  UserRoundPlusIcon,
  ZapIcon,
} from "lucide-react";

export const ContactForm = () => {
  return (
    <>
      <h2>Let us know a bit about yourself, and we will reach out soon.</h2>
      <form className="border">
        <fieldset disabled={false}>
          <h3>Personal Details</h3>
          <div>
            <label htmlFor="">Name</label>
            <input type="search" name="Full name" />
          </div>
          <div className="flex-center-between">
            <div>
              <label htmlFor="">Email</label>
              <input type="email" placeholder="Ex. person@dmain.com" />
            </div>
            <div>
              <label htmlFor="">Telephone</label>
              <input type="tel" placeholder="+234" />
            </div>
          </div>
          <h3>Business Details</h3>
          <div>
            <label htmlFor="">Name</label>
            <input type="search" placeholder="Ex. Acme Inc" />
          </div>
          <div>
            <label htmlFor="">Industry</label>
            <select>
              <option value="other">Other</option>
            </select>
            <input type="search" placeholder="(Other) please specify" />
          </div>
          <div>
            <label htmlFor="">Location</label>
            <input
              type="text"
              list="business-location-datalist"
              placeholder="Ex. Sapele Road, Benin"
            />
            <datalist id="business-location-datalist">
              <option value="Sapele Road, Benin" />
            </datalist>
          </div>
          <div>
            <button>Send</button>
          </div>
        </fieldset>
      </form>
    </>
  );
};
