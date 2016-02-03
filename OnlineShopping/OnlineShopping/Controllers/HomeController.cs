using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace OnlineShopping.Controllers
{
    public class HomeController : Controller
    {
        /// <summary>
        /// Action method to handle the application page load.
        /// </summary>
        /// <returns></returns>
        public ActionResult OnPageLoad()
        {
            return View();
        }

        /// <summary>
        /// Action method to render Lakme Product detail page
        /// </summary>
        /// <returns></returns>
        public ActionResult LakmeProducts()
        {
            return View();
        }

        /// <summary>
        /// Action method to render Maybelline Product detail page
        /// </summary>
        /// <returns></returns>
        public ActionResult MaybellineProducts()
        {
            return View();
        }

        /// <summary>
        /// Action method to render Blue Heaven Product detail page
        /// </summary>
        /// <returns></returns>
        public ActionResult BlueHeavenProducts()
        {
            return View();
        }

        /// <summary>
        /// Action method to render Oriflame Product detail page
        /// </summary>
        /// <returns></returns>
        public ActionResult OriflameProducts()
        {
            return View();
        }

    }
}
