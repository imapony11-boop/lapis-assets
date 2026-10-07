(function lapisInit(){
  if (document.readyState === 'loading'){ document.addEventListener('DOMContentLoaded', lapisInit); return; }
  if (window.__lapisSite) return; window.__lapisSite = 1;
  if (document.querySelector('use[href="#lp-draw"]') && !document.getElementById('lp-draw')){ var sp = document.createElement('div'); sp.innerHTML = "<svg aria-hidden=\"true\" height=\"0\" style=\"position:absolute\" width=\"0\"><symbol id=\"lp-draw\" viewBox=\"0 0 1170 699\"><rect fill=\"#F6F3EC\" height=\"699\" width=\"1170\"></rect><g fill=\"none\" stroke=\"#2B2924\" stroke-linecap=\"round\"><path d=\"M 132 238 L 663 238 L 663 640 L 112 640 L 112 258 Q 112 238 132 238 Z\" fill=\"#FBF9F4\" stroke-width=\"1.8\"></path><path d=\"M 545 338 L 1172 338 L 1172 640 L 663 640\" fill=\"#FBF9F4\" stroke-width=\"1.8\"></path><line stroke-width=\"1.4\" x1=\"663.0\" x2=\"663.0\" y1=\"338.0\" y2=\"640.0\"></line><rect fill=\"#FBF9F4\" height=\"30.0\" stroke-width=\"1.2\" width=\"82.0\" x=\"552.0\" y=\"230.0\"></rect><line opacity=\"0.7\" stroke-width=\"0.8\" x1=\"112.0\" x2=\"663.0\" y1=\"246.0\" y2=\"246.0\"></line><line opacity=\"0.7\" stroke-width=\"0.8\" x1=\"545.0\" x2=\"1172.0\" y1=\"346.0\" y2=\"346.0\"></line><line stroke-width=\"1.0\" x1=\"112.0\" x2=\"1172.0\" y1=\"352.0\" y2=\"352.0\"></line><line opacity=\"0.6\" stroke-width=\"0.6\" x1=\"112.0\" x2=\"1172.0\" y1=\"357.0\" y2=\"357.0\"></line><line stroke-width=\"1.0\" x1=\"112.0\" x2=\"1172.0\" y1=\"452.0\" y2=\"452.0\"></line><line opacity=\"0.6\" stroke-width=\"0.6\" x1=\"112.0\" x2=\"1172.0\" y1=\"457.0\" y2=\"457.0\"></line><line stroke-width=\"1.0\" x1=\"112.0\" x2=\"1172.0\" y1=\"552.0\" y2=\"552.0\"></line><line opacity=\"0.6\" stroke-width=\"0.6\" x1=\"112.0\" x2=\"1172.0\" y1=\"557.0\" y2=\"557.0\"></line><line stroke-width=\"1.8\" x1=\"0.0\" x2=\"1170.0\" y1=\"640.0\" y2=\"640.0\"></line><line opacity=\"0.6\" stroke-width=\"0.7\" x1=\"0.0\" x2=\"1170.0\" y1=\"654.0\" y2=\"654.0\"></line><line opacity=\"0.28\" stroke-width=\"0.35\" x1=\"116.0\" x2=\"660.0\" y1=\"258.0\" y2=\"258.0\"></line><line opacity=\"0.28\" stroke-width=\"0.35\" x1=\"116.0\" x2=\"660.0\" y1=\"267.0\" y2=\"267.0\"></line><line opacity=\"0.28\" stroke-width=\"0.35\" x1=\"116.0\" x2=\"660.0\" y1=\"276.0\" y2=\"276.0\"></line><line opacity=\"0.28\" stroke-width=\"0.35\" x1=\"116.0\" x2=\"660.0\" y1=\"285.0\" y2=\"285.0\"></line><line opacity=\"0.28\" stroke-width=\"0.35\" x1=\"116.0\" x2=\"660.0\" y1=\"294.0\" y2=\"294.0\"></line><line opacity=\"0.28\" stroke-width=\"0.35\" x1=\"116.0\" x2=\"660.0\" y1=\"303.0\" y2=\"303.0\"></line><line opacity=\"0.28\" stroke-width=\"0.35\" x1=\"116.0\" x2=\"660.0\" y1=\"312.0\" y2=\"312.0\"></line><line opacity=\"0.28\" stroke-width=\"0.35\" x1=\"116.0\" x2=\"660.0\" y1=\"321.0\" y2=\"321.0\"></line><line opacity=\"0.28\" stroke-width=\"0.35\" x1=\"116.0\" x2=\"660.0\" y1=\"330.0\" y2=\"330.0\"></line><line opacity=\"0.28\" stroke-width=\"0.35\" x1=\"116.0\" x2=\"660.0\" y1=\"339.0\" y2=\"339.0\"></line><line opacity=\"0.28\" stroke-width=\"0.35\" x1=\"116.0\" x2=\"660.0\" y1=\"348.0\" y2=\"348.0\"></line><line opacity=\"0.28\" stroke-width=\"0.35\" x1=\"116.0\" x2=\"660.0\" y1=\"357.0\" y2=\"357.0\"></line><line opacity=\"0.28\" stroke-width=\"0.35\" x1=\"116.0\" x2=\"660.0\" y1=\"366.0\" y2=\"366.0\"></line><line opacity=\"0.28\" stroke-width=\"0.35\" x1=\"116.0\" x2=\"660.0\" y1=\"375.0\" y2=\"375.0\"></line><line opacity=\"0.28\" stroke-width=\"0.35\" x1=\"116.0\" x2=\"660.0\" y1=\"384.0\" y2=\"384.0\"></line><line opacity=\"0.28\" stroke-width=\"0.35\" x1=\"116.0\" x2=\"660.0\" y1=\"393.0\" y2=\"393.0\"></line><line opacity=\"0.28\" stroke-width=\"0.35\" x1=\"116.0\" x2=\"660.0\" y1=\"402.0\" y2=\"402.0\"></line><line opacity=\"0.28\" stroke-width=\"0.35\" x1=\"116.0\" x2=\"660.0\" y1=\"411.0\" y2=\"411.0\"></line><line opacity=\"0.28\" stroke-width=\"0.35\" x1=\"116.0\" x2=\"660.0\" y1=\"420.0\" y2=\"420.0\"></line><line opacity=\"0.28\" stroke-width=\"0.35\" x1=\"116.0\" x2=\"660.0\" y1=\"429.0\" y2=\"429.0\"></line><line opacity=\"0.28\" stroke-width=\"0.35\" x1=\"116.0\" x2=\"660.0\" y1=\"438.0\" y2=\"438.0\"></line><line opacity=\"0.28\" stroke-width=\"0.35\" x1=\"116.0\" x2=\"660.0\" y1=\"447.0\" y2=\"447.0\"></line><line opacity=\"0.28\" stroke-width=\"0.35\" x1=\"116.0\" x2=\"660.0\" y1=\"456.0\" y2=\"456.0\"></line><line opacity=\"0.28\" stroke-width=\"0.35\" x1=\"116.0\" x2=\"660.0\" y1=\"465.0\" y2=\"465.0\"></line><line opacity=\"0.28\" stroke-width=\"0.35\" x1=\"116.0\" x2=\"660.0\" y1=\"474.0\" y2=\"474.0\"></line><line opacity=\"0.28\" stroke-width=\"0.35\" x1=\"116.0\" x2=\"660.0\" y1=\"483.0\" y2=\"483.0\"></line><line opacity=\"0.28\" stroke-width=\"0.35\" x1=\"116.0\" x2=\"660.0\" y1=\"492.0\" y2=\"492.0\"></line><line opacity=\"0.28\" stroke-width=\"0.35\" x1=\"116.0\" x2=\"660.0\" y1=\"501.0\" y2=\"501.0\"></line><line opacity=\"0.28\" stroke-width=\"0.35\" x1=\"116.0\" x2=\"660.0\" y1=\"510.0\" y2=\"510.0\"></line><line opacity=\"0.28\" stroke-width=\"0.35\" x1=\"116.0\" x2=\"660.0\" y1=\"519.0\" y2=\"519.0\"></line><line opacity=\"0.28\" stroke-width=\"0.35\" x1=\"116.0\" x2=\"660.0\" y1=\"528.0\" y2=\"528.0\"></line><line opacity=\"0.28\" stroke-width=\"0.35\" x1=\"116.0\" x2=\"660.0\" y1=\"537.0\" y2=\"537.0\"></line><line opacity=\"0.28\" stroke-width=\"0.35\" x1=\"116.0\" x2=\"660.0\" y1=\"546.0\" y2=\"546.0\"></line><line opacity=\"0.28\" stroke-width=\"0.35\" x1=\"116.0\" x2=\"660.0\" y1=\"555.0\" y2=\"555.0\"></line><line opacity=\"0.28\" stroke-width=\"0.35\" x1=\"116.0\" x2=\"660.0\" y1=\"564.0\" y2=\"564.0\"></line><line opacity=\"0.28\" stroke-width=\"0.35\" x1=\"116.0\" x2=\"660.0\" y1=\"573.0\" y2=\"573.0\"></line><line opacity=\"0.28\" stroke-width=\"0.35\" x1=\"116.0\" x2=\"660.0\" y1=\"582.0\" y2=\"582.0\"></line><line opacity=\"0.28\" stroke-width=\"0.35\" x1=\"116.0\" x2=\"660.0\" y1=\"591.0\" y2=\"591.0\"></line><line opacity=\"0.28\" stroke-width=\"0.35\" x1=\"116.0\" x2=\"660.0\" y1=\"600.0\" y2=\"600.0\"></line><line opacity=\"0.28\" stroke-width=\"0.35\" x1=\"116.0\" x2=\"660.0\" y1=\"609.0\" y2=\"609.0\"></line><line opacity=\"0.28\" stroke-width=\"0.35\" x1=\"116.0\" x2=\"660.0\" y1=\"618.0\" y2=\"618.0\"></line><line opacity=\"0.28\" stroke-width=\"0.35\" x1=\"116.0\" x2=\"660.0\" y1=\"627.0\" y2=\"627.0\"></line><line opacity=\"0.28\" stroke-width=\"0.35\" x1=\"116.0\" x2=\"660.0\" y1=\"636.0\" y2=\"636.0\"></line><line opacity=\"0.28\" stroke-width=\"0.35\" x1=\"667.0\" x2=\"1170.0\" y1=\"358.0\" y2=\"358.0\"></line><line opacity=\"0.28\" stroke-width=\"0.35\" x1=\"667.0\" x2=\"1170.0\" y1=\"367.0\" y2=\"367.0\"></line><line opacity=\"0.28\" stroke-width=\"0.35\" x1=\"667.0\" x2=\"1170.0\" y1=\"376.0\" y2=\"376.0\"></line><line opacity=\"0.28\" stroke-width=\"0.35\" x1=\"667.0\" x2=\"1170.0\" y1=\"385.0\" y2=\"385.0\"></line><line opacity=\"0.28\" stroke-width=\"0.35\" x1=\"667.0\" x2=\"1170.0\" y1=\"394.0\" y2=\"394.0\"></line><line opacity=\"0.28\" stroke-width=\"0.35\" x1=\"667.0\" x2=\"1170.0\" y1=\"403.0\" y2=\"403.0\"></line><line opacity=\"0.28\" stroke-width=\"0.35\" x1=\"667.0\" x2=\"1170.0\" y1=\"412.0\" y2=\"412.0\"></line><line opacity=\"0.28\" stroke-width=\"0.35\" x1=\"667.0\" x2=\"1170.0\" y1=\"421.0\" y2=\"421.0\"></line><line opacity=\"0.28\" stroke-width=\"0.35\" x1=\"667.0\" x2=\"1170.0\" y1=\"430.0\" y2=\"430.0\"></line><line opacity=\"0.28\" stroke-width=\"0.35\" x1=\"667.0\" x2=\"1170.0\" y1=\"439.0\" y2=\"439.0\"></line><line opacity=\"0.28\" stroke-width=\"0.35\" x1=\"667.0\" x2=\"1170.0\" y1=\"448.0\" y2=\"448.0\"></line><line opacity=\"0.28\" stroke-width=\"0.35\" x1=\"667.0\" x2=\"1170.0\" y1=\"457.0\" y2=\"457.0\"></line><line opacity=\"0.28\" stroke-width=\"0.35\" x1=\"667.0\" x2=\"1170.0\" y1=\"466.0\" y2=\"466.0\"></line><line opacity=\"0.28\" stroke-width=\"0.35\" x1=\"667.0\" x2=\"1170.0\" y1=\"475.0\" y2=\"475.0\"></line><line opacity=\"0.28\" stroke-width=\"0.35\" x1=\"667.0\" x2=\"1170.0\" y1=\"484.0\" y2=\"484.0\"></line><line opacity=\"0.28\" stroke-width=\"0.35\" x1=\"667.0\" x2=\"1170.0\" y1=\"493.0\" y2=\"493.0\"></line><line opacity=\"0.28\" stroke-width=\"0.35\" x1=\"667.0\" x2=\"1170.0\" y1=\"502.0\" y2=\"502.0\"></line><line opacity=\"0.28\" stroke-width=\"0.35\" x1=\"667.0\" x2=\"1170.0\" y1=\"511.0\" y2=\"511.0\"></line><line opacity=\"0.28\" stroke-width=\"0.35\" x1=\"667.0\" x2=\"1170.0\" y1=\"520.0\" y2=\"520.0\"></line><line opacity=\"0.28\" stroke-width=\"0.35\" x1=\"667.0\" x2=\"1170.0\" y1=\"529.0\" y2=\"529.0\"></line><line opacity=\"0.28\" stroke-width=\"0.35\" x1=\"667.0\" x2=\"1170.0\" y1=\"538.0\" y2=\"538.0\"></line><line opacity=\"0.28\" stroke-width=\"0.35\" x1=\"667.0\" x2=\"1170.0\" y1=\"547.0\" y2=\"547.0\"></line><line opacity=\"0.28\" stroke-width=\"0.35\" x1=\"667.0\" x2=\"1170.0\" y1=\"556.0\" y2=\"556.0\"></line><line opacity=\"0.28\" stroke-width=\"0.35\" x1=\"667.0\" x2=\"1170.0\" y1=\"565.0\" y2=\"565.0\"></line><line opacity=\"0.28\" stroke-width=\"0.35\" x1=\"667.0\" x2=\"1170.0\" y1=\"574.0\" y2=\"574.0\"></line><line opacity=\"0.28\" stroke-width=\"0.35\" x1=\"667.0\" x2=\"1170.0\" y1=\"583.0\" y2=\"583.0\"></line><line opacity=\"0.28\" stroke-width=\"0.35\" x1=\"667.0\" x2=\"1170.0\" y1=\"592.0\" y2=\"592.0\"></line><line opacity=\"0.28\" stroke-width=\"0.35\" x1=\"667.0\" x2=\"1170.0\" y1=\"601.0\" y2=\"601.0\"></line><line opacity=\"0.28\" stroke-width=\"0.35\" x1=\"667.0\" x2=\"1170.0\" y1=\"610.0\" y2=\"610.0\"></line><line opacity=\"0.28\" stroke-width=\"0.35\" x1=\"667.0\" x2=\"1170.0\" y1=\"619.0\" y2=\"619.0\"></line><line opacity=\"0.28\" stroke-width=\"0.35\" x1=\"667.0\" x2=\"1170.0\" y1=\"628.0\" y2=\"628.0\"></line><line opacity=\"0.28\" stroke-width=\"0.35\" x1=\"667.0\" x2=\"1170.0\" y1=\"637.0\" y2=\"637.0\"></line><rect fill=\"#FFFFFF\" height=\"84.0\" stroke-width=\"1.3\" width=\"32.0\" x=\"168.0\" y=\"266.0\"></rect><rect fill=\"none\" height=\"78.0\" opacity=\"0.7\" stroke-width=\"0.6\" width=\"26.0\" x=\"171.0\" y=\"269.0\"></rect><line stroke-width=\"0.9\" x1=\"168.0\" x2=\"200.0\" y1=\"322.0\" y2=\"322.0\"></line><line opacity=\"0.8\" stroke-width=\"0.4\" x1=\"173.0\" x2=\"173.0\" y1=\"322.0\" y2=\"350.0\"></line><line opacity=\"0.8\" stroke-width=\"0.4\" x1=\"179.0\" x2=\"179.0\" y1=\"322.0\" y2=\"350.0\"></line><line opacity=\"0.8\" stroke-width=\"0.4\" x1=\"185.0\" x2=\"185.0\" y1=\"322.0\" y2=\"350.0\"></line><line opacity=\"0.8\" stroke-width=\"0.4\" x1=\"191.0\" x2=\"191.0\" y1=\"322.0\" y2=\"350.0\"></line><line opacity=\"0.8\" stroke-width=\"0.4\" x1=\"197.0\" x2=\"197.0\" y1=\"322.0\" y2=\"350.0\"></line><rect fill=\"#FFFFFF\" height=\"84.0\" stroke-width=\"1.3\" width=\"65.0\" x=\"250.0\" y=\"266.0\"></rect><rect fill=\"none\" height=\"78.0\" opacity=\"0.7\" stroke-width=\"0.6\" width=\"59.0\" x=\"253.0\" y=\"269.0\"></rect><line stroke-width=\"0.8\" x1=\"282.5\" x2=\"282.5\" y1=\"269.0\" y2=\"347.0\"></line><line stroke-width=\"0.9\" x1=\"250.0\" x2=\"315.0\" y1=\"322.0\" y2=\"322.0\"></line><line opacity=\"0.8\" stroke-width=\"0.4\" x1=\"255.0\" x2=\"255.0\" y1=\"322.0\" y2=\"350.0\"></line><line opacity=\"0.8\" stroke-width=\"0.4\" x1=\"261.0\" x2=\"261.0\" y1=\"322.0\" y2=\"350.0\"></line><line opacity=\"0.8\" stroke-width=\"0.4\" x1=\"267.0\" x2=\"267.0\" y1=\"322.0\" y2=\"350.0\"></line><line opacity=\"0.8\" stroke-width=\"0.4\" x1=\"273.0\" x2=\"273.0\" y1=\"322.0\" y2=\"350.0\"></line><line opacity=\"0.8\" stroke-width=\"0.4\" x1=\"279.0\" x2=\"279.0\" y1=\"322.0\" y2=\"350.0\"></line><line opacity=\"0.8\" stroke-width=\"0.4\" x1=\"285.0\" x2=\"285.0\" y1=\"322.0\" y2=\"350.0\"></line><line opacity=\"0.8\" stroke-width=\"0.4\" x1=\"291.0\" x2=\"291.0\" y1=\"322.0\" y2=\"350.0\"></line><line opacity=\"0.8\" stroke-width=\"0.4\" x1=\"297.0\" x2=\"297.0\" y1=\"322.0\" y2=\"350.0\"></line><line opacity=\"0.8\" stroke-width=\"0.4\" x1=\"303.0\" x2=\"303.0\" y1=\"322.0\" y2=\"350.0\"></line><line opacity=\"0.8\" stroke-width=\"0.4\" x1=\"309.0\" x2=\"309.0\" y1=\"322.0\" y2=\"350.0\"></line><rect fill=\"#FFFFFF\" height=\"84.0\" stroke-width=\"1.3\" width=\"64.0\" x=\"364.0\" y=\"266.0\"></rect><rect fill=\"none\" height=\"78.0\" opacity=\"0.7\" stroke-width=\"0.6\" width=\"58.0\" x=\"367.0\" y=\"269.0\"></rect><line stroke-width=\"0.8\" x1=\"396.0\" x2=\"396.0\" y1=\"269.0\" y2=\"347.0\"></line><line stroke-width=\"0.9\" x1=\"364.0\" x2=\"428.0\" y1=\"322.0\" y2=\"322.0\"></line><line opacity=\"0.8\" stroke-width=\"0.4\" x1=\"369.0\" x2=\"369.0\" y1=\"322.0\" y2=\"350.0\"></line><line opacity=\"0.8\" stroke-width=\"0.4\" x1=\"375.0\" x2=\"375.0\" y1=\"322.0\" y2=\"350.0\"></line><line opacity=\"0.8\" stroke-width=\"0.4\" x1=\"381.0\" x2=\"381.0\" y1=\"322.0\" y2=\"350.0\"></line><line opacity=\"0.8\" stroke-width=\"0.4\" x1=\"387.0\" x2=\"387.0\" y1=\"322.0\" y2=\"350.0\"></line><line opacity=\"0.8\" stroke-width=\"0.4\" x1=\"393.0\" x2=\"393.0\" y1=\"322.0\" y2=\"350.0\"></line><line opacity=\"0.8\" stroke-width=\"0.4\" x1=\"399.0\" x2=\"399.0\" y1=\"322.0\" y2=\"350.0\"></line><line opacity=\"0.8\" stroke-width=\"0.4\" x1=\"405.0\" x2=\"405.0\" y1=\"322.0\" y2=\"350.0\"></line><line opacity=\"0.8\" stroke-width=\"0.4\" x1=\"411.0\" x2=\"411.0\" y1=\"322.0\" y2=\"350.0\"></line><line opacity=\"0.8\" stroke-width=\"0.4\" x1=\"417.0\" x2=\"417.0\" y1=\"322.0\" y2=\"350.0\"></line><line opacity=\"0.8\" stroke-width=\"0.4\" x1=\"423.0\" x2=\"423.0\" y1=\"322.0\" y2=\"350.0\"></line><rect fill=\"#FFFFFF\" height=\"84.0\" stroke-width=\"1.3\" width=\"32.0\" x=\"476.0\" y=\"266.0\"></rect><rect fill=\"none\" height=\"78.0\" opacity=\"0.7\" stroke-width=\"0.6\" width=\"26.0\" x=\"479.0\" y=\"269.0\"></rect><line stroke-width=\"0.9\" x1=\"476.0\" x2=\"508.0\" y1=\"322.0\" y2=\"322.0\"></line><line opacity=\"0.8\" stroke-width=\"0.4\" x1=\"481.0\" x2=\"481.0\" y1=\"322.0\" y2=\"350.0\"></line><line opacity=\"0.8\" stroke-width=\"0.4\" x1=\"487.0\" x2=\"487.0\" y1=\"322.0\" y2=\"350.0\"></line><line opacity=\"0.8\" stroke-width=\"0.4\" x1=\"493.0\" x2=\"493.0\" y1=\"322.0\" y2=\"350.0\"></line><line opacity=\"0.8\" stroke-width=\"0.4\" x1=\"499.0\" x2=\"499.0\" y1=\"322.0\" y2=\"350.0\"></line><line opacity=\"0.8\" stroke-width=\"0.4\" x1=\"505.0\" x2=\"505.0\" y1=\"322.0\" y2=\"350.0\"></line><rect fill=\"#FFFFFF\" height=\"82.0\" stroke-width=\"1.3\" width=\"32.0\" x=\"168.0\" y=\"366.0\"></rect><rect fill=\"none\" height=\"76.0\" opacity=\"0.7\" stroke-width=\"0.6\" width=\"26.0\" x=\"171.0\" y=\"369.0\"></rect><line stroke-width=\"0.9\" x1=\"168.0\" x2=\"200.0\" y1=\"420.0\" y2=\"420.0\"></line><line opacity=\"0.8\" stroke-width=\"0.4\" x1=\"173.0\" x2=\"173.0\" y1=\"420.0\" y2=\"448.0\"></line><line opacity=\"0.8\" stroke-width=\"0.4\" x1=\"179.0\" x2=\"179.0\" y1=\"420.0\" y2=\"448.0\"></line><line opacity=\"0.8\" stroke-width=\"0.4\" x1=\"185.0\" x2=\"185.0\" y1=\"420.0\" y2=\"448.0\"></line><line opacity=\"0.8\" stroke-width=\"0.4\" x1=\"191.0\" x2=\"191.0\" y1=\"420.0\" y2=\"448.0\"></line><line opacity=\"0.8\" stroke-width=\"0.4\" x1=\"197.0\" x2=\"197.0\" y1=\"420.0\" y2=\"448.0\"></line><rect fill=\"#FFFFFF\" height=\"82.0\" stroke-width=\"1.3\" width=\"65.0\" x=\"250.0\" y=\"366.0\"></rect><rect fill=\"none\" height=\"76.0\" opacity=\"0.7\" stroke-width=\"0.6\" width=\"59.0\" x=\"253.0\" y=\"369.0\"></rect><line stroke-width=\"0.8\" x1=\"282.5\" x2=\"282.5\" y1=\"369.0\" y2=\"445.0\"></line><line stroke-width=\"0.9\" x1=\"250.0\" x2=\"315.0\" y1=\"420.0\" y2=\"420.0\"></line><line opacity=\"0.8\" stroke-width=\"0.4\" x1=\"255.0\" x2=\"255.0\" y1=\"420.0\" y2=\"448.0\"></line><line opacity=\"0.8\" stroke-width=\"0.4\" x1=\"261.0\" x2=\"261.0\" y1=\"420.0\" y2=\"448.0\"></line><line opacity=\"0.8\" stroke-width=\"0.4\" x1=\"267.0\" x2=\"267.0\" y1=\"420.0\" y2=\"448.0\"></line><line opacity=\"0.8\" stroke-width=\"0.4\" x1=\"273.0\" x2=\"273.0\" y1=\"420.0\" y2=\"448.0\"></line><line opacity=\"0.8\" stroke-width=\"0.4\" x1=\"279.0\" x2=\"279.0\" y1=\"420.0\" y2=\"448.0\"></line><line opacity=\"0.8\" stroke-width=\"0.4\" x1=\"285.0\" x2=\"285.0\" y1=\"420.0\" y2=\"448.0\"></line><line opacity=\"0.8\" stroke-width=\"0.4\" x1=\"291.0\" x2=\"291.0\" y1=\"420.0\" y2=\"448.0\"></line><line opacity=\"0.8\" stroke-width=\"0.4\" x1=\"297.0\" x2=\"297.0\" y1=\"420.0\" y2=\"448.0\"></line><line opacity=\"0.8\" stroke-width=\"0.4\" x1=\"303.0\" x2=\"303.0\" y1=\"420.0\" y2=\"448.0\"></line><line opacity=\"0.8\" stroke-width=\"0.4\" x1=\"309.0\" x2=\"309.0\" y1=\"420.0\" y2=\"448.0\"></line><rect fill=\"#FFFFFF\" height=\"82.0\" stroke-width=\"1.3\" width=\"64.0\" x=\"364.0\" y=\"366.0\"></rect><rect fill=\"none\" height=\"76.0\" opacity=\"0.7\" stroke-width=\"0.6\" width=\"58.0\" x=\"367.0\" y=\"369.0\"></rect><line stroke-width=\"0.8\" x1=\"396.0\" x2=\"396.0\" y1=\"369.0\" y2=\"445.0\"></line><line stroke-width=\"0.9\" x1=\"364.0\" x2=\"428.0\" y1=\"420.0\" y2=\"420.0\"></line><line opacity=\"0.8\" stroke-width=\"0.4\" x1=\"369.0\" x2=\"369.0\" y1=\"420.0\" y2=\"448.0\"></line><line opacity=\"0.8\" stroke-width=\"0.4\" x1=\"375.0\" x2=\"375.0\" y1=\"420.0\" y2=\"448.0\"></line><line opacity=\"0.8\" stroke-width=\"0.4\" x1=\"381.0\" x2=\"381.0\" y1=\"420.0\" y2=\"448.0\"></line><line opacity=\"0.8\" stroke-width=\"0.4\" x1=\"387.0\" x2=\"387.0\" y1=\"420.0\" y2=\"448.0\"></line><line opacity=\"0.8\" stroke-width=\"0.4\" x1=\"393.0\" x2=\"393.0\" y1=\"420.0\" y2=\"448.0\"></line><line opacity=\"0.8\" stroke-width=\"0.4\" x1=\"399.0\" x2=\"399.0\" y1=\"420.0\" y2=\"448.0\"></line><line opacity=\"0.8\" stroke-width=\"0.4\" x1=\"405.0\" x2=\"405.0\" y1=\"420.0\" y2=\"448.0\"></line><line opacity=\"0.8\" stroke-width=\"0.4\" x1=\"411.0\" x2=\"411.0\" y1=\"420.0\" y2=\"448.0\"></line><line opacity=\"0.8\" stroke-width=\"0.4\" x1=\"417.0\" x2=\"417.0\" y1=\"420.0\" y2=\"448.0\"></line><line opacity=\"0.8\" stroke-width=\"0.4\" x1=\"423.0\" x2=\"423.0\" y1=\"420.0\" y2=\"448.0\"></line><rect fill=\"#FFFFFF\" height=\"82.0\" stroke-width=\"1.3\" width=\"32.0\" x=\"476.0\" y=\"366.0\"></rect><rect fill=\"none\" height=\"76.0\" opacity=\"0.7\" stroke-width=\"0.6\" width=\"26.0\" x=\"479.0\" y=\"369.0\"></rect><line stroke-width=\"0.9\" x1=\"476.0\" x2=\"508.0\" y1=\"420.0\" y2=\"420.0\"></line><line opacity=\"0.8\" stroke-width=\"0.4\" x1=\"481.0\" x2=\"481.0\" y1=\"420.0\" y2=\"448.0\"></line><line opacity=\"0.8\" stroke-width=\"0.4\" x1=\"487.0\" x2=\"487.0\" y1=\"420.0\" y2=\"448.0\"></line><line opacity=\"0.8\" stroke-width=\"0.4\" x1=\"493.0\" x2=\"493.0\" y1=\"420.0\" y2=\"448.0\"></line><line opacity=\"0.8\" stroke-width=\"0.4\" x1=\"499.0\" x2=\"499.0\" y1=\"420.0\" y2=\"448.0\"></line><line opacity=\"0.8\" stroke-width=\"0.4\" x1=\"505.0\" x2=\"505.0\" y1=\"420.0\" y2=\"448.0\"></line><rect fill=\"#FFFFFF\" height=\"82.0\" stroke-width=\"1.3\" width=\"32.0\" x=\"168.0\" y=\"466.0\"></rect><rect fill=\"none\" height=\"76.0\" opacity=\"0.7\" stroke-width=\"0.6\" width=\"26.0\" x=\"171.0\" y=\"469.0\"></rect><line stroke-width=\"0.9\" x1=\"168.0\" x2=\"200.0\" y1=\"520.0\" y2=\"520.0\"></line><line opacity=\"0.8\" stroke-width=\"0.4\" x1=\"173.0\" x2=\"173.0\" y1=\"520.0\" y2=\"548.0\"></line><line opacity=\"0.8\" stroke-width=\"0.4\" x1=\"179.0\" x2=\"179.0\" y1=\"520.0\" y2=\"548.0\"></line><line opacity=\"0.8\" stroke-width=\"0.4\" x1=\"185.0\" x2=\"185.0\" y1=\"520.0\" y2=\"548.0\"></line><line opacity=\"0.8\" stroke-width=\"0.4\" x1=\"191.0\" x2=\"191.0\" y1=\"520.0\" y2=\"548.0\"></line><line opacity=\"0.8\" stroke-width=\"0.4\" x1=\"197.0\" x2=\"197.0\" y1=\"520.0\" y2=\"548.0\"></line><rect fill=\"#FFFFFF\" height=\"82.0\" stroke-width=\"1.3\" width=\"65.0\" x=\"250.0\" y=\"466.0\"></rect><rect fill=\"none\" height=\"76.0\" opacity=\"0.7\" stroke-width=\"0.6\" width=\"59.0\" x=\"253.0\" y=\"469.0\"></rect><line stroke-width=\"0.8\" x1=\"282.5\" x2=\"282.5\" y1=\"469.0\" y2=\"545.0\"></line><line stroke-width=\"0.9\" x1=\"250.0\" x2=\"315.0\" y1=\"520.0\" y2=\"520.0\"></line><line opacity=\"0.8\" stroke-width=\"0.4\" x1=\"255.0\" x2=\"255.0\" y1=\"520.0\" y2=\"548.0\"></line><line opacity=\"0.8\" stroke-width=\"0.4\" x1=\"261.0\" x2=\"261.0\" y1=\"520.0\" y2=\"548.0\"></line><line opacity=\"0.8\" stroke-width=\"0.4\" x1=\"267.0\" x2=\"267.0\" y1=\"520.0\" y2=\"548.0\"></line><line opacity=\"0.8\" stroke-width=\"0.4\" x1=\"273.0\" x2=\"273.0\" y1=\"520.0\" y2=\"548.0\"></line><line opacity=\"0.8\" stroke-width=\"0.4\" x1=\"279.0\" x2=\"279.0\" y1=\"520.0\" y2=\"548.0\"></line><line opacity=\"0.8\" stroke-width=\"0.4\" x1=\"285.0\" x2=\"285.0\" y1=\"520.0\" y2=\"548.0\"></line><line opacity=\"0.8\" stroke-width=\"0.4\" x1=\"291.0\" x2=\"291.0\" y1=\"520.0\" y2=\"548.0\"></line><line opacity=\"0.8\" stroke-width=\"0.4\" x1=\"297.0\" x2=\"297.0\" y1=\"520.0\" y2=\"548.0\"></line><line opacity=\"0.8\" stroke-width=\"0.4\" x1=\"303.0\" x2=\"303.0\" y1=\"520.0\" y2=\"548.0\"></line><line opacity=\"0.8\" stroke-width=\"0.4\" x1=\"309.0\" x2=\"309.0\" y1=\"520.0\" y2=\"548.0\"></line><rect fill=\"#FFFFFF\" height=\"82.0\" stroke-width=\"1.3\" width=\"64.0\" x=\"364.0\" y=\"466.0\"></rect><rect fill=\"none\" height=\"76.0\" opacity=\"0.7\" stroke-width=\"0.6\" width=\"58.0\" x=\"367.0\" y=\"469.0\"></rect><line stroke-width=\"0.8\" x1=\"396.0\" x2=\"396.0\" y1=\"469.0\" y2=\"545.0\"></line><line stroke-width=\"0.9\" x1=\"364.0\" x2=\"428.0\" y1=\"520.0\" y2=\"520.0\"></line><line opacity=\"0.8\" stroke-width=\"0.4\" x1=\"369.0\" x2=\"369.0\" y1=\"520.0\" y2=\"548.0\"></line><line opacity=\"0.8\" stroke-width=\"0.4\" x1=\"375.0\" x2=\"375.0\" y1=\"520.0\" y2=\"548.0\"></line><line opacity=\"0.8\" stroke-width=\"0.4\" x1=\"381.0\" x2=\"381.0\" y1=\"520.0\" y2=\"548.0\"></line><line opacity=\"0.8\" stroke-width=\"0.4\" x1=\"387.0\" x2=\"387.0\" y1=\"520.0\" y2=\"548.0\"></line><line opacity=\"0.8\" stroke-width=\"0.4\" x1=\"393.0\" x2=\"393.0\" y1=\"520.0\" y2=\"548.0\"></line><line opacity=\"0.8\" stroke-width=\"0.4\" x1=\"399.0\" x2=\"399.0\" y1=\"520.0\" y2=\"548.0\"></line><line opacity=\"0.8\" stroke-width=\"0.4\" x1=\"405.0\" x2=\"405.0\" y1=\"520.0\" y2=\"548.0\"></line><line opacity=\"0.8\" stroke-width=\"0.4\" x1=\"411.0\" x2=\"411.0\" y1=\"520.0\" y2=\"548.0\"></line><line opacity=\"0.8\" stroke-width=\"0.4\" x1=\"417.0\" x2=\"417.0\" y1=\"520.0\" y2=\"548.0\"></line><line opacity=\"0.8\" stroke-width=\"0.4\" x1=\"423.0\" x2=\"423.0\" y1=\"520.0\" y2=\"548.0\"></line><rect fill=\"#FFFFFF\" height=\"82.0\" stroke-width=\"1.3\" width=\"32.0\" x=\"476.0\" y=\"466.0\"></rect><rect fill=\"none\" height=\"76.0\" opacity=\"0.7\" stroke-width=\"0.6\" width=\"26.0\" x=\"479.0\" y=\"469.0\"></rect><line stroke-width=\"0.9\" x1=\"476.0\" x2=\"508.0\" y1=\"520.0\" y2=\"520.0\"></line><line opacity=\"0.8\" stroke-width=\"0.4\" x1=\"481.0\" x2=\"481.0\" y1=\"520.0\" y2=\"548.0\"></line><line opacity=\"0.8\" stroke-width=\"0.4\" x1=\"487.0\" x2=\"487.0\" y1=\"520.0\" y2=\"548.0\"></line><line opacity=\"0.8\" stroke-width=\"0.4\" x1=\"493.0\" x2=\"493.0\" y1=\"520.0\" y2=\"548.0\"></line><line opacity=\"0.8\" stroke-width=\"0.4\" x1=\"499.0\" x2=\"499.0\" y1=\"520.0\" y2=\"548.0\"></line><line opacity=\"0.8\" stroke-width=\"0.4\" x1=\"505.0\" x2=\"505.0\" y1=\"520.0\" y2=\"548.0\"></line><rect fill=\"#FFFFFF\" height=\"55.0\" stroke-width=\"1.3\" width=\"32.0\" x=\"168.0\" y=\"565.0\"></rect><rect fill=\"none\" height=\"49.0\" opacity=\"0.7\" stroke-width=\"0.6\" width=\"26.0\" x=\"171.0\" y=\"568.0\"></rect><rect fill=\"#FFFFFF\" height=\"55.0\" stroke-width=\"1.3\" width=\"65.0\" x=\"250.0\" y=\"565.0\"></rect><rect fill=\"none\" height=\"49.0\" opacity=\"0.7\" stroke-width=\"0.6\" width=\"59.0\" x=\"253.0\" y=\"568.0\"></rect><line stroke-width=\"0.8\" x1=\"282.5\" x2=\"282.5\" y1=\"568.0\" y2=\"617.0\"></line><rect fill=\"#FFFFFF\" height=\"55.0\" stroke-width=\"1.3\" width=\"64.0\" x=\"364.0\" y=\"565.0\"></rect><rect fill=\"none\" height=\"49.0\" opacity=\"0.7\" stroke-width=\"0.6\" width=\"58.0\" x=\"367.0\" y=\"568.0\"></rect><line stroke-width=\"0.8\" x1=\"396.0\" x2=\"396.0\" y1=\"568.0\" y2=\"617.0\"></line><rect fill=\"#FFFFFF\" height=\"55.0\" stroke-width=\"1.3\" width=\"32.0\" x=\"476.0\" y=\"565.0\"></rect><rect fill=\"none\" height=\"49.0\" opacity=\"0.7\" stroke-width=\"0.6\" width=\"26.0\" x=\"479.0\" y=\"568.0\"></rect><rect fill=\"#FFFFFF\" height=\"70.0\" stroke-width=\"0.8\" width=\"8.0\" x=\"597.0\" y=\"272.0\"></rect><rect fill=\"#FFFFFF\" height=\"70.0\" stroke-width=\"0.8\" width=\"8.0\" x=\"618.0\" y=\"272.0\"></rect><rect fill=\"#FFFFFF\" height=\"70.0\" stroke-width=\"0.8\" width=\"8.0\" x=\"640.0\" y=\"272.0\"></rect><rect fill=\"#FFFFFF\" height=\"68.0\" stroke-width=\"0.8\" width=\"8.0\" x=\"597.0\" y=\"372.0\"></rect><rect fill=\"#FFFFFF\" height=\"68.0\" stroke-width=\"0.8\" width=\"8.0\" x=\"618.0\" y=\"372.0\"></rect><rect fill=\"#FFFFFF\" height=\"68.0\" stroke-width=\"0.8\" width=\"8.0\" x=\"640.0\" y=\"372.0\"></rect><rect fill=\"#FFFFFF\" height=\"68.0\" stroke-width=\"0.8\" width=\"8.0\" x=\"597.0\" y=\"472.0\"></rect><rect fill=\"#FFFFFF\" height=\"68.0\" stroke-width=\"0.8\" width=\"8.0\" x=\"618.0\" y=\"472.0\"></rect><rect fill=\"#FFFFFF\" height=\"68.0\" stroke-width=\"0.8\" width=\"8.0\" x=\"640.0\" y=\"472.0\"></rect><rect fill=\"#FFFFFF\" height=\"82.0\" stroke-width=\"1.3\" width=\"93.0\" x=\"597.0\" y=\"366.0\"></rect><rect fill=\"none\" height=\"76.0\" opacity=\"0.7\" stroke-width=\"0.6\" width=\"87.0\" x=\"600.0\" y=\"369.0\"></rect><line stroke-width=\"0.8\" x1=\"643.5\" x2=\"643.5\" y1=\"369.0\" y2=\"445.0\"></line><line stroke-width=\"0.9\" x1=\"597.0\" x2=\"690.0\" y1=\"420.0\" y2=\"420.0\"></line><line opacity=\"0.8\" stroke-width=\"0.4\" x1=\"602.0\" x2=\"602.0\" y1=\"420.0\" y2=\"448.0\"></line><line opacity=\"0.8\" stroke-width=\"0.4\" x1=\"608.0\" x2=\"608.0\" y1=\"420.0\" y2=\"448.0\"></line><line opacity=\"0.8\" stroke-width=\"0.4\" x1=\"614.0\" x2=\"614.0\" y1=\"420.0\" y2=\"448.0\"></line><line opacity=\"0.8\" stroke-width=\"0.4\" x1=\"620.0\" x2=\"620.0\" y1=\"420.0\" y2=\"448.0\"></line><line opacity=\"0.8\" stroke-width=\"0.4\" x1=\"626.0\" x2=\"626.0\" y1=\"420.0\" y2=\"448.0\"></line><line opacity=\"0.8\" stroke-width=\"0.4\" x1=\"632.0\" x2=\"632.0\" y1=\"420.0\" y2=\"448.0\"></line><line opacity=\"0.8\" stroke-width=\"0.4\" x1=\"638.0\" x2=\"638.0\" y1=\"420.0\" y2=\"448.0\"></line><line opacity=\"0.8\" stroke-width=\"0.4\" x1=\"644.0\" x2=\"644.0\" y1=\"420.0\" y2=\"448.0\"></line><line opacity=\"0.8\" stroke-width=\"0.4\" x1=\"650.0\" x2=\"650.0\" y1=\"420.0\" y2=\"448.0\"></line><line opacity=\"0.8\" stroke-width=\"0.4\" x1=\"656.0\" x2=\"656.0\" y1=\"420.0\" y2=\"448.0\"></line><line opacity=\"0.8\" stroke-width=\"0.4\" x1=\"662.0\" x2=\"662.0\" y1=\"420.0\" y2=\"448.0\"></line><line opacity=\"0.8\" stroke-width=\"0.4\" x1=\"668.0\" x2=\"668.0\" y1=\"420.0\" y2=\"448.0\"></line><line opacity=\"0.8\" stroke-width=\"0.4\" x1=\"674.0\" x2=\"674.0\" y1=\"420.0\" y2=\"448.0\"></line><line opacity=\"0.8\" stroke-width=\"0.4\" x1=\"680.0\" x2=\"680.0\" y1=\"420.0\" y2=\"448.0\"></line><line opacity=\"0.8\" stroke-width=\"0.4\" x1=\"686.0\" x2=\"686.0\" y1=\"420.0\" y2=\"448.0\"></line><rect fill=\"#FFFFFF\" height=\"82.0\" stroke-width=\"1.3\" width=\"27.0\" x=\"733.0\" y=\"366.0\"></rect><rect fill=\"none\" height=\"76.0\" opacity=\"0.7\" stroke-width=\"0.6\" width=\"21.0\" x=\"736.0\" y=\"369.0\"></rect><line stroke-width=\"0.9\" x1=\"733.0\" x2=\"760.0\" y1=\"420.0\" y2=\"420.0\"></line><line opacity=\"0.8\" stroke-width=\"0.4\" x1=\"738.0\" x2=\"738.0\" y1=\"420.0\" y2=\"448.0\"></line><line opacity=\"0.8\" stroke-width=\"0.4\" x1=\"744.0\" x2=\"744.0\" y1=\"420.0\" y2=\"448.0\"></line><line opacity=\"0.8\" stroke-width=\"0.4\" x1=\"750.0\" x2=\"750.0\" y1=\"420.0\" y2=\"448.0\"></line><line opacity=\"0.8\" stroke-width=\"0.4\" x1=\"756.0\" x2=\"756.0\" y1=\"420.0\" y2=\"448.0\"></line><rect fill=\"#FFFFFF\" height=\"82.0\" stroke-width=\"1.3\" width=\"28.0\" x=\"790.0\" y=\"366.0\"></rect><rect fill=\"none\" height=\"76.0\" opacity=\"0.7\" stroke-width=\"0.6\" width=\"22.0\" x=\"793.0\" y=\"369.0\"></rect><line stroke-width=\"0.9\" x1=\"790.0\" x2=\"818.0\" y1=\"420.0\" y2=\"420.0\"></line><line opacity=\"0.8\" stroke-width=\"0.4\" x1=\"795.0\" x2=\"795.0\" y1=\"420.0\" y2=\"448.0\"></line><line opacity=\"0.8\" stroke-width=\"0.4\" x1=\"801.0\" x2=\"801.0\" y1=\"420.0\" y2=\"448.0\"></line><line opacity=\"0.8\" stroke-width=\"0.4\" x1=\"807.0\" x2=\"807.0\" y1=\"420.0\" y2=\"448.0\"></line><line opacity=\"0.8\" stroke-width=\"0.4\" x1=\"813.0\" x2=\"813.0\" y1=\"420.0\" y2=\"448.0\"></line><rect fill=\"#FFFFFF\" height=\"82.0\" stroke-width=\"1.3\" width=\"94.0\" x=\"853.0\" y=\"366.0\"></rect><rect fill=\"none\" height=\"76.0\" opacity=\"0.7\" stroke-width=\"0.6\" width=\"88.0\" x=\"856.0\" y=\"369.0\"></rect><line stroke-width=\"0.8\" x1=\"900.0\" x2=\"900.0\" y1=\"369.0\" y2=\"445.0\"></line><line stroke-width=\"0.9\" x1=\"853.0\" x2=\"947.0\" y1=\"420.0\" y2=\"420.0\"></line><line opacity=\"0.8\" stroke-width=\"0.4\" x1=\"858.0\" x2=\"858.0\" y1=\"420.0\" y2=\"448.0\"></line><line opacity=\"0.8\" stroke-width=\"0.4\" x1=\"864.0\" x2=\"864.0\" y1=\"420.0\" y2=\"448.0\"></line><line opacity=\"0.8\" stroke-width=\"0.4\" x1=\"870.0\" x2=\"870.0\" y1=\"420.0\" y2=\"448.0\"></line><line opacity=\"0.8\" stroke-width=\"0.4\" x1=\"876.0\" x2=\"876.0\" y1=\"420.0\" y2=\"448.0\"></line><line opacity=\"0.8\" stroke-width=\"0.4\" x1=\"882.0\" x2=\"882.0\" y1=\"420.0\" y2=\"448.0\"></line><line opacity=\"0.8\" stroke-width=\"0.4\" x1=\"888.0\" x2=\"888.0\" y1=\"420.0\" y2=\"448.0\"></line><line opacity=\"0.8\" stroke-width=\"0.4\" x1=\"894.0\" x2=\"894.0\" y1=\"420.0\" y2=\"448.0\"></line><line opacity=\"0.8\" stroke-width=\"0.4\" x1=\"900.0\" x2=\"900.0\" y1=\"420.0\" y2=\"448.0\"></line><line opacity=\"0.8\" stroke-width=\"0.4\" x1=\"906.0\" x2=\"906.0\" y1=\"420.0\" y2=\"448.0\"></line><line opacity=\"0.8\" stroke-width=\"0.4\" x1=\"912.0\" x2=\"912.0\" y1=\"420.0\" y2=\"448.0\"></line><line opacity=\"0.8\" stroke-width=\"0.4\" x1=\"918.0\" x2=\"918.0\" y1=\"420.0\" y2=\"448.0\"></line><line opacity=\"0.8\" stroke-width=\"0.4\" x1=\"924.0\" x2=\"924.0\" y1=\"420.0\" y2=\"448.0\"></line><line opacity=\"0.8\" stroke-width=\"0.4\" x1=\"930.0\" x2=\"930.0\" y1=\"420.0\" y2=\"448.0\"></line><line opacity=\"0.8\" stroke-width=\"0.4\" x1=\"936.0\" x2=\"936.0\" y1=\"420.0\" y2=\"448.0\"></line><line opacity=\"0.8\" stroke-width=\"0.4\" x1=\"942.0\" x2=\"942.0\" y1=\"420.0\" y2=\"448.0\"></line><rect fill=\"#FFFFFF\" height=\"82.0\" stroke-width=\"1.3\" width=\"27.0\" x=\"990.0\" y=\"366.0\"></rect><rect fill=\"none\" height=\"76.0\" opacity=\"0.7\" stroke-width=\"0.6\" width=\"21.0\" x=\"993.0\" y=\"369.0\"></rect><line stroke-width=\"0.9\" x1=\"990.0\" x2=\"1017.0\" y1=\"420.0\" y2=\"420.0\"></line><line opacity=\"0.8\" stroke-width=\"0.4\" x1=\"995.0\" x2=\"995.0\" y1=\"420.0\" y2=\"448.0\"></line><line opacity=\"0.8\" stroke-width=\"0.4\" x1=\"1001.0\" x2=\"1001.0\" y1=\"420.0\" y2=\"448.0\"></line><line opacity=\"0.8\" stroke-width=\"0.4\" x1=\"1007.0\" x2=\"1007.0\" y1=\"420.0\" y2=\"448.0\"></line><line opacity=\"0.8\" stroke-width=\"0.4\" x1=\"1013.0\" x2=\"1013.0\" y1=\"420.0\" y2=\"448.0\"></line><rect fill=\"#FFFFFF\" height=\"82.0\" stroke-width=\"1.3\" width=\"28.0\" x=\"1047.0\" y=\"366.0\"></rect><rect fill=\"none\" height=\"76.0\" opacity=\"0.7\" stroke-width=\"0.6\" width=\"22.0\" x=\"1050.0\" y=\"369.0\"></rect><line stroke-width=\"0.9\" x1=\"1047.0\" x2=\"1075.0\" y1=\"420.0\" y2=\"420.0\"></line><line opacity=\"0.8\" stroke-width=\"0.4\" x1=\"1052.0\" x2=\"1052.0\" y1=\"420.0\" y2=\"448.0\"></line><line opacity=\"0.8\" stroke-width=\"0.4\" x1=\"1058.0\" x2=\"1058.0\" y1=\"420.0\" y2=\"448.0\"></line><line opacity=\"0.8\" stroke-width=\"0.4\" x1=\"1064.0\" x2=\"1064.0\" y1=\"420.0\" y2=\"448.0\"></line><line opacity=\"0.8\" stroke-width=\"0.4\" x1=\"1070.0\" x2=\"1070.0\" y1=\"420.0\" y2=\"448.0\"></line><rect fill=\"#FFFFFF\" height=\"82.0\" stroke-width=\"1.3\" width=\"64.0\" x=\"1108.0\" y=\"366.0\"></rect><rect fill=\"none\" height=\"76.0\" opacity=\"0.7\" stroke-width=\"0.6\" width=\"58.0\" x=\"1111.0\" y=\"369.0\"></rect><line stroke-width=\"0.8\" x1=\"1140.0\" x2=\"1140.0\" y1=\"369.0\" y2=\"445.0\"></line><line stroke-width=\"0.9\" x1=\"1108.0\" x2=\"1172.0\" y1=\"420.0\" y2=\"420.0\"></line><line opacity=\"0.8\" stroke-width=\"0.4\" x1=\"1113.0\" x2=\"1113.0\" y1=\"420.0\" y2=\"448.0\"></line><line opacity=\"0.8\" stroke-width=\"0.4\" x1=\"1119.0\" x2=\"1119.0\" y1=\"420.0\" y2=\"448.0\"></line><line opacity=\"0.8\" stroke-width=\"0.4\" x1=\"1125.0\" x2=\"1125.0\" y1=\"420.0\" y2=\"448.0\"></line><line opacity=\"0.8\" stroke-width=\"0.4\" x1=\"1131.0\" x2=\"1131.0\" y1=\"420.0\" y2=\"448.0\"></line><line opacity=\"0.8\" stroke-width=\"0.4\" x1=\"1137.0\" x2=\"1137.0\" y1=\"420.0\" y2=\"448.0\"></line><line opacity=\"0.8\" stroke-width=\"0.4\" x1=\"1143.0\" x2=\"1143.0\" y1=\"420.0\" y2=\"448.0\"></line><line opacity=\"0.8\" stroke-width=\"0.4\" x1=\"1149.0\" x2=\"1149.0\" y1=\"420.0\" y2=\"448.0\"></line><line opacity=\"0.8\" stroke-width=\"0.4\" x1=\"1155.0\" x2=\"1155.0\" y1=\"420.0\" y2=\"448.0\"></line><line opacity=\"0.8\" stroke-width=\"0.4\" x1=\"1161.0\" x2=\"1161.0\" y1=\"420.0\" y2=\"448.0\"></line><line opacity=\"0.8\" stroke-width=\"0.4\" x1=\"1167.0\" x2=\"1167.0\" y1=\"420.0\" y2=\"448.0\"></line><rect fill=\"#FFFFFF\" height=\"82.0\" stroke-width=\"1.3\" width=\"93.0\" x=\"597.0\" y=\"466.0\"></rect><rect fill=\"none\" height=\"76.0\" opacity=\"0.7\" stroke-width=\"0.6\" width=\"87.0\" x=\"600.0\" y=\"469.0\"></rect><line stroke-width=\"0.8\" x1=\"643.5\" x2=\"643.5\" y1=\"469.0\" y2=\"545.0\"></line><line stroke-width=\"0.9\" x1=\"597.0\" x2=\"690.0\" y1=\"520.0\" y2=\"520.0\"></line><line opacity=\"0.8\" stroke-width=\"0.4\" x1=\"602.0\" x2=\"602.0\" y1=\"520.0\" y2=\"548.0\"></line><line opacity=\"0.8\" stroke-width=\"0.4\" x1=\"608.0\" x2=\"608.0\" y1=\"520.0\" y2=\"548.0\"></line><line opacity=\"0.8\" stroke-width=\"0.4\" x1=\"614.0\" x2=\"614.0\" y1=\"520.0\" y2=\"548.0\"></line><line opacity=\"0.8\" stroke-width=\"0.4\" x1=\"620.0\" x2=\"620.0\" y1=\"520.0\" y2=\"548.0\"></line><line opacity=\"0.8\" stroke-width=\"0.4\" x1=\"626.0\" x2=\"626.0\" y1=\"520.0\" y2=\"548.0\"></line><line opacity=\"0.8\" stroke-width=\"0.4\" x1=\"632.0\" x2=\"632.0\" y1=\"520.0\" y2=\"548.0\"></line><line opacity=\"0.8\" stroke-width=\"0.4\" x1=\"638.0\" x2=\"638.0\" y1=\"520.0\" y2=\"548.0\"></line><line opacity=\"0.8\" stroke-width=\"0.4\" x1=\"644.0\" x2=\"644.0\" y1=\"520.0\" y2=\"548.0\"></line><line opacity=\"0.8\" stroke-width=\"0.4\" x1=\"650.0\" x2=\"650.0\" y1=\"520.0\" y2=\"548.0\"></line><line opacity=\"0.8\" stroke-width=\"0.4\" x1=\"656.0\" x2=\"656.0\" y1=\"520.0\" y2=\"548.0\"></line><line opacity=\"0.8\" stroke-width=\"0.4\" x1=\"662.0\" x2=\"662.0\" y1=\"520.0\" y2=\"548.0\"></line><line opacity=\"0.8\" stroke-width=\"0.4\" x1=\"668.0\" x2=\"668.0\" y1=\"520.0\" y2=\"548.0\"></line><line opacity=\"0.8\" stroke-width=\"0.4\" x1=\"674.0\" x2=\"674.0\" y1=\"520.0\" y2=\"548.0\"></line><line opacity=\"0.8\" stroke-width=\"0.4\" x1=\"680.0\" x2=\"680.0\" y1=\"520.0\" y2=\"548.0\"></line><line opacity=\"0.8\" stroke-width=\"0.4\" x1=\"686.0\" x2=\"686.0\" y1=\"520.0\" y2=\"548.0\"></line><rect fill=\"#FFFFFF\" height=\"82.0\" stroke-width=\"1.3\" width=\"27.0\" x=\"733.0\" y=\"466.0\"></rect><rect fill=\"none\" height=\"76.0\" opacity=\"0.7\" stroke-width=\"0.6\" width=\"21.0\" x=\"736.0\" y=\"469.0\"></rect><line stroke-width=\"0.9\" x1=\"733.0\" x2=\"760.0\" y1=\"520.0\" y2=\"520.0\"></line><line opacity=\"0.8\" stroke-width=\"0.4\" x1=\"738.0\" x2=\"738.0\" y1=\"520.0\" y2=\"548.0\"></line><line opacity=\"0.8\" stroke-width=\"0.4\" x1=\"744.0\" x2=\"744.0\" y1=\"520.0\" y2=\"548.0\"></line><line opacity=\"0.8\" stroke-width=\"0.4\" x1=\"750.0\" x2=\"750.0\" y1=\"520.0\" y2=\"548.0\"></line><line opacity=\"0.8\" stroke-width=\"0.4\" x1=\"756.0\" x2=\"756.0\" y1=\"520.0\" y2=\"548.0\"></line><rect fill=\"#FFFFFF\" height=\"82.0\" stroke-width=\"1.3\" width=\"28.0\" x=\"790.0\" y=\"466.0\"></rect><rect fill=\"none\" height=\"76.0\" opacity=\"0.7\" stroke-width=\"0.6\" width=\"22.0\" x=\"793.0\" y=\"469.0\"></rect><line stroke-width=\"0.9\" x1=\"790.0\" x2=\"818.0\" y1=\"520.0\" y2=\"520.0\"></line><line opacity=\"0.8\" stroke-width=\"0.4\" x1=\"795.0\" x2=\"795.0\" y1=\"520.0\" y2=\"548.0\"></line><line opacity=\"0.8\" stroke-width=\"0.4\" x1=\"801.0\" x2=\"801.0\" y1=\"520.0\" y2=\"548.0\"></line><line opacity=\"0.8\" stroke-width=\"0.4\" x1=\"807.0\" x2=\"807.0\" y1=\"520.0\" y2=\"548.0\"></line><line opacity=\"0.8\" stroke-width=\"0.4\" x1=\"813.0\" x2=\"813.0\" y1=\"520.0\" y2=\"548.0\"></line><rect fill=\"#FFFFFF\" height=\"82.0\" stroke-width=\"1.3\" width=\"94.0\" x=\"853.0\" y=\"466.0\"></rect><rect fill=\"none\" height=\"76.0\" opacity=\"0.7\" stroke-width=\"0.6\" width=\"88.0\" x=\"856.0\" y=\"469.0\"></rect><line stroke-width=\"0.8\" x1=\"900.0\" x2=\"900.0\" y1=\"469.0\" y2=\"545.0\"></line><line stroke-width=\"0.9\" x1=\"853.0\" x2=\"947.0\" y1=\"520.0\" y2=\"520.0\"></line><line opacity=\"0.8\" stroke-width=\"0.4\" x1=\"858.0\" x2=\"858.0\" y1=\"520.0\" y2=\"548.0\"></line><line opacity=\"0.8\" stroke-width=\"0.4\" x1=\"864.0\" x2=\"864.0\" y1=\"520.0\" y2=\"548.0\"></line><line opacity=\"0.8\" stroke-width=\"0.4\" x1=\"870.0\" x2=\"870.0\" y1=\"520.0\" y2=\"548.0\"></line><line opacity=\"0.8\" stroke-width=\"0.4\" x1=\"876.0\" x2=\"876.0\" y1=\"520.0\" y2=\"548.0\"></line><line opacity=\"0.8\" stroke-width=\"0.4\" x1=\"882.0\" x2=\"882.0\" y1=\"520.0\" y2=\"548.0\"></line><line opacity=\"0.8\" stroke-width=\"0.4\" x1=\"888.0\" x2=\"888.0\" y1=\"520.0\" y2=\"548.0\"></line><line opacity=\"0.8\" stroke-width=\"0.4\" x1=\"894.0\" x2=\"894.0\" y1=\"520.0\" y2=\"548.0\"></line><line opacity=\"0.8\" stroke-width=\"0.4\" x1=\"900.0\" x2=\"900.0\" y1=\"520.0\" y2=\"548.0\"></line><line opacity=\"0.8\" stroke-width=\"0.4\" x1=\"906.0\" x2=\"906.0\" y1=\"520.0\" y2=\"548.0\"></line><line opacity=\"0.8\" stroke-width=\"0.4\" x1=\"912.0\" x2=\"912.0\" y1=\"520.0\" y2=\"548.0\"></line><line opacity=\"0.8\" stroke-width=\"0.4\" x1=\"918.0\" x2=\"918.0\" y1=\"520.0\" y2=\"548.0\"></line><line opacity=\"0.8\" stroke-width=\"0.4\" x1=\"924.0\" x2=\"924.0\" y1=\"520.0\" y2=\"548.0\"></line><line opacity=\"0.8\" stroke-width=\"0.4\" x1=\"930.0\" x2=\"930.0\" y1=\"520.0\" y2=\"548.0\"></line><line opacity=\"0.8\" stroke-width=\"0.4\" x1=\"936.0\" x2=\"936.0\" y1=\"520.0\" y2=\"548.0\"></line><line opacity=\"0.8\" stroke-width=\"0.4\" x1=\"942.0\" x2=\"942.0\" y1=\"520.0\" y2=\"548.0\"></line><rect fill=\"#FFFFFF\" height=\"82.0\" stroke-width=\"1.3\" width=\"27.0\" x=\"990.0\" y=\"466.0\"></rect><rect fill=\"none\" height=\"76.0\" opacity=\"0.7\" stroke-width=\"0.6\" width=\"21.0\" x=\"993.0\" y=\"469.0\"></rect><line stroke-width=\"0.9\" x1=\"990.0\" x2=\"1017.0\" y1=\"520.0\" y2=\"520.0\"></line><line opacity=\"0.8\" stroke-width=\"0.4\" x1=\"995.0\" x2=\"995.0\" y1=\"520.0\" y2=\"548.0\"></line><line opacity=\"0.8\" stroke-width=\"0.4\" x1=\"1001.0\" x2=\"1001.0\" y1=\"520.0\" y2=\"548.0\"></line><line opacity=\"0.8\" stroke-width=\"0.4\" x1=\"1007.0\" x2=\"1007.0\" y1=\"520.0\" y2=\"548.0\"></line><line opacity=\"0.8\" stroke-width=\"0.4\" x1=\"1013.0\" x2=\"1013.0\" y1=\"520.0\" y2=\"548.0\"></line><rect fill=\"#FFFFFF\" height=\"82.0\" stroke-width=\"1.3\" width=\"28.0\" x=\"1047.0\" y=\"466.0\"></rect><rect fill=\"none\" height=\"76.0\" opacity=\"0.7\" stroke-width=\"0.6\" width=\"22.0\" x=\"1050.0\" y=\"469.0\"></rect><line stroke-width=\"0.9\" x1=\"1047.0\" x2=\"1075.0\" y1=\"520.0\" y2=\"520.0\"></line><line opacity=\"0.8\" stroke-width=\"0.4\" x1=\"1052.0\" x2=\"1052.0\" y1=\"520.0\" y2=\"548.0\"></line><line opacity=\"0.8\" stroke-width=\"0.4\" x1=\"1058.0\" x2=\"1058.0\" y1=\"520.0\" y2=\"548.0\"></line><line opacity=\"0.8\" stroke-width=\"0.4\" x1=\"1064.0\" x2=\"1064.0\" y1=\"520.0\" y2=\"548.0\"></line><line opacity=\"0.8\" stroke-width=\"0.4\" x1=\"1070.0\" x2=\"1070.0\" y1=\"520.0\" y2=\"548.0\"></line><rect fill=\"#FFFFFF\" height=\"82.0\" stroke-width=\"1.3\" width=\"64.0\" x=\"1108.0\" y=\"466.0\"></rect><rect fill=\"none\" height=\"76.0\" opacity=\"0.7\" stroke-width=\"0.6\" width=\"58.0\" x=\"1111.0\" y=\"469.0\"></rect><line stroke-width=\"0.8\" x1=\"1140.0\" x2=\"1140.0\" y1=\"469.0\" y2=\"545.0\"></line><line stroke-width=\"0.9\" x1=\"1108.0\" x2=\"1172.0\" y1=\"520.0\" y2=\"520.0\"></line><line opacity=\"0.8\" stroke-width=\"0.4\" x1=\"1113.0\" x2=\"1113.0\" y1=\"520.0\" y2=\"548.0\"></line><line opacity=\"0.8\" stroke-width=\"0.4\" x1=\"1119.0\" x2=\"1119.0\" y1=\"520.0\" y2=\"548.0\"></line><line opacity=\"0.8\" stroke-width=\"0.4\" x1=\"1125.0\" x2=\"1125.0\" y1=\"520.0\" y2=\"548.0\"></line><line opacity=\"0.8\" stroke-width=\"0.4\" x1=\"1131.0\" x2=\"1131.0\" y1=\"520.0\" y2=\"548.0\"></line><line opacity=\"0.8\" stroke-width=\"0.4\" x1=\"1137.0\" x2=\"1137.0\" y1=\"520.0\" y2=\"548.0\"></line><line opacity=\"0.8\" stroke-width=\"0.4\" x1=\"1143.0\" x2=\"1143.0\" y1=\"520.0\" y2=\"548.0\"></line><line opacity=\"0.8\" stroke-width=\"0.4\" x1=\"1149.0\" x2=\"1149.0\" y1=\"520.0\" y2=\"548.0\"></line><line opacity=\"0.8\" stroke-width=\"0.4\" x1=\"1155.0\" x2=\"1155.0\" y1=\"520.0\" y2=\"548.0\"></line><line opacity=\"0.8\" stroke-width=\"0.4\" x1=\"1161.0\" x2=\"1161.0\" y1=\"520.0\" y2=\"548.0\"></line><line opacity=\"0.8\" stroke-width=\"0.4\" x1=\"1167.0\" x2=\"1167.0\" y1=\"520.0\" y2=\"548.0\"></line><rect fill=\"#FFFFFF\" height=\"65.0\" stroke-width=\"1.3\" width=\"93.0\" x=\"597.0\" y=\"565.0\"></rect><rect fill=\"none\" height=\"59.0\" opacity=\"0.7\" stroke-width=\"0.6\" width=\"87.0\" x=\"600.0\" y=\"568.0\"></rect><line stroke-width=\"0.8\" x1=\"643.5\" x2=\"643.5\" y1=\"568.0\" y2=\"627.0\"></line><rect fill=\"#FFFFFF\" height=\"65.0\" stroke-width=\"1.3\" width=\"27.0\" x=\"733.0\" y=\"565.0\"></rect><rect fill=\"none\" height=\"59.0\" opacity=\"0.7\" stroke-width=\"0.6\" width=\"21.0\" x=\"736.0\" y=\"568.0\"></rect><rect fill=\"#FFFFFF\" height=\"65.0\" stroke-width=\"1.3\" width=\"28.0\" x=\"790.0\" y=\"565.0\"></rect><rect fill=\"none\" height=\"59.0\" opacity=\"0.7\" stroke-width=\"0.6\" width=\"22.0\" x=\"793.0\" y=\"568.0\"></rect><rect fill=\"#FFFFFF\" height=\"65.0\" stroke-width=\"1.3\" width=\"94.0\" x=\"853.0\" y=\"565.0\"></rect><rect fill=\"none\" height=\"59.0\" opacity=\"0.7\" stroke-width=\"0.6\" width=\"88.0\" x=\"856.0\" y=\"568.0\"></rect><line stroke-width=\"0.8\" x1=\"900.0\" x2=\"900.0\" y1=\"568.0\" y2=\"627.0\"></line><rect fill=\"#FFFFFF\" height=\"65.0\" stroke-width=\"1.3\" width=\"27.0\" x=\"990.0\" y=\"565.0\"></rect><rect fill=\"none\" height=\"59.0\" opacity=\"0.7\" stroke-width=\"0.6\" width=\"21.0\" x=\"993.0\" y=\"568.0\"></rect><rect fill=\"#FFFFFF\" height=\"65.0\" stroke-width=\"1.3\" width=\"28.0\" x=\"1047.0\" y=\"565.0\"></rect><rect fill=\"none\" height=\"59.0\" opacity=\"0.7\" stroke-width=\"0.6\" width=\"22.0\" x=\"1050.0\" y=\"568.0\"></rect><rect fill=\"#FFFFFF\" height=\"65.0\" stroke-width=\"1.3\" width=\"64.0\" x=\"1108.0\" y=\"565.0\"></rect><rect fill=\"none\" height=\"59.0\" opacity=\"0.7\" stroke-width=\"0.6\" width=\"58.0\" x=\"1111.0\" y=\"568.0\"></rect><line stroke-width=\"0.8\" x1=\"1140.0\" x2=\"1140.0\" y1=\"568.0\" y2=\"627.0\"></line><rect fill=\"#FBF9F4\" height=\"12.0\" stroke-width=\"1.2\" width=\"127.0\" x=\"588.0\" y=\"448.0\"></rect><rect fill=\"none\" height=\"34.0\" stroke-width=\"0.9\" width=\"127.0\" x=\"588.0\" y=\"414.0\"></rect><line opacity=\"0.7\" stroke-width=\"0.35\" x1=\"592.0\" x2=\"592.0\" y1=\"414.0\" y2=\"448.0\"></line><line opacity=\"0.7\" stroke-width=\"0.35\" x1=\"597.0\" x2=\"597.0\" y1=\"414.0\" y2=\"448.0\"></line><line opacity=\"0.7\" stroke-width=\"0.35\" x1=\"602.0\" x2=\"602.0\" y1=\"414.0\" y2=\"448.0\"></line><line opacity=\"0.7\" stroke-width=\"0.35\" x1=\"607.0\" x2=\"607.0\" y1=\"414.0\" y2=\"448.0\"></line><line opacity=\"0.7\" stroke-width=\"0.35\" x1=\"612.0\" x2=\"612.0\" y1=\"414.0\" y2=\"448.0\"></line><line opacity=\"0.7\" stroke-width=\"0.35\" x1=\"617.0\" x2=\"617.0\" y1=\"414.0\" y2=\"448.0\"></line><line opacity=\"0.7\" stroke-width=\"0.35\" x1=\"622.0\" x2=\"622.0\" y1=\"414.0\" y2=\"448.0\"></line><line opacity=\"0.7\" stroke-width=\"0.35\" x1=\"627.0\" x2=\"627.0\" y1=\"414.0\" y2=\"448.0\"></line><line opacity=\"0.7\" stroke-width=\"0.35\" x1=\"632.0\" x2=\"632.0\" y1=\"414.0\" y2=\"448.0\"></line><line opacity=\"0.7\" stroke-width=\"0.35\" x1=\"637.0\" x2=\"637.0\" y1=\"414.0\" y2=\"448.0\"></line><line opacity=\"0.7\" stroke-width=\"0.35\" x1=\"642.0\" x2=\"642.0\" y1=\"414.0\" y2=\"448.0\"></line><line opacity=\"0.7\" stroke-width=\"0.35\" x1=\"647.0\" x2=\"647.0\" y1=\"414.0\" y2=\"448.0\"></line><line opacity=\"0.7\" stroke-width=\"0.35\" x1=\"652.0\" x2=\"652.0\" y1=\"414.0\" y2=\"448.0\"></line><line opacity=\"0.7\" stroke-width=\"0.35\" x1=\"657.0\" x2=\"657.0\" y1=\"414.0\" y2=\"448.0\"></line><line opacity=\"0.7\" stroke-width=\"0.35\" x1=\"662.0\" x2=\"662.0\" y1=\"414.0\" y2=\"448.0\"></line><line opacity=\"0.7\" stroke-width=\"0.35\" x1=\"667.0\" x2=\"667.0\" y1=\"414.0\" y2=\"448.0\"></line><line opacity=\"0.7\" stroke-width=\"0.35\" x1=\"672.0\" x2=\"672.0\" y1=\"414.0\" y2=\"448.0\"></line><line opacity=\"0.7\" stroke-width=\"0.35\" x1=\"677.0\" x2=\"677.0\" y1=\"414.0\" y2=\"448.0\"></line><line opacity=\"0.7\" stroke-width=\"0.35\" x1=\"682.0\" x2=\"682.0\" y1=\"414.0\" y2=\"448.0\"></line><line opacity=\"0.7\" stroke-width=\"0.35\" x1=\"687.0\" x2=\"687.0\" y1=\"414.0\" y2=\"448.0\"></line><line opacity=\"0.7\" stroke-width=\"0.35\" x1=\"692.0\" x2=\"692.0\" y1=\"414.0\" y2=\"448.0\"></line><line opacity=\"0.7\" stroke-width=\"0.35\" x1=\"697.0\" x2=\"697.0\" y1=\"414.0\" y2=\"448.0\"></line><line opacity=\"0.7\" stroke-width=\"0.35\" x1=\"702.0\" x2=\"702.0\" y1=\"414.0\" y2=\"448.0\"></line><line opacity=\"0.7\" stroke-width=\"0.35\" x1=\"707.0\" x2=\"707.0\" y1=\"414.0\" y2=\"448.0\"></line><line opacity=\"0.7\" stroke-width=\"0.35\" x1=\"712.0\" x2=\"712.0\" y1=\"414.0\" y2=\"448.0\"></line><rect fill=\"#FBF9F4\" height=\"12.0\" stroke-width=\"1.2\" width=\"127.0\" x=\"588.0\" y=\"548.0\"></rect><rect fill=\"none\" height=\"34.0\" stroke-width=\"0.9\" width=\"127.0\" x=\"588.0\" y=\"514.0\"></rect><line opacity=\"0.7\" stroke-width=\"0.35\" x1=\"592.0\" x2=\"592.0\" y1=\"514.0\" y2=\"548.0\"></line><line opacity=\"0.7\" stroke-width=\"0.35\" x1=\"597.0\" x2=\"597.0\" y1=\"514.0\" y2=\"548.0\"></line><line opacity=\"0.7\" stroke-width=\"0.35\" x1=\"602.0\" x2=\"602.0\" y1=\"514.0\" y2=\"548.0\"></line><line opacity=\"0.7\" stroke-width=\"0.35\" x1=\"607.0\" x2=\"607.0\" y1=\"514.0\" y2=\"548.0\"></line><line opacity=\"0.7\" stroke-width=\"0.35\" x1=\"612.0\" x2=\"612.0\" y1=\"514.0\" y2=\"548.0\"></line><line opacity=\"0.7\" stroke-width=\"0.35\" x1=\"617.0\" x2=\"617.0\" y1=\"514.0\" y2=\"548.0\"></line><line opacity=\"0.7\" stroke-width=\"0.35\" x1=\"622.0\" x2=\"622.0\" y1=\"514.0\" y2=\"548.0\"></line><line opacity=\"0.7\" stroke-width=\"0.35\" x1=\"627.0\" x2=\"627.0\" y1=\"514.0\" y2=\"548.0\"></line><line opacity=\"0.7\" stroke-width=\"0.35\" x1=\"632.0\" x2=\"632.0\" y1=\"514.0\" y2=\"548.0\"></line><line opacity=\"0.7\" stroke-width=\"0.35\" x1=\"637.0\" x2=\"637.0\" y1=\"514.0\" y2=\"548.0\"></line><line opacity=\"0.7\" stroke-width=\"0.35\" x1=\"642.0\" x2=\"642.0\" y1=\"514.0\" y2=\"548.0\"></line><line opacity=\"0.7\" stroke-width=\"0.35\" x1=\"647.0\" x2=\"647.0\" y1=\"514.0\" y2=\"548.0\"></line><line opacity=\"0.7\" stroke-width=\"0.35\" x1=\"652.0\" x2=\"652.0\" y1=\"514.0\" y2=\"548.0\"></line><line opacity=\"0.7\" stroke-width=\"0.35\" x1=\"657.0\" x2=\"657.0\" y1=\"514.0\" y2=\"548.0\"></line><line opacity=\"0.7\" stroke-width=\"0.35\" x1=\"662.0\" x2=\"662.0\" y1=\"514.0\" y2=\"548.0\"></line><line opacity=\"0.7\" stroke-width=\"0.35\" x1=\"667.0\" x2=\"667.0\" y1=\"514.0\" y2=\"548.0\"></line><line opacity=\"0.7\" stroke-width=\"0.35\" x1=\"672.0\" x2=\"672.0\" y1=\"514.0\" y2=\"548.0\"></line><line opacity=\"0.7\" stroke-width=\"0.35\" x1=\"677.0\" x2=\"677.0\" y1=\"514.0\" y2=\"548.0\"></line><line opacity=\"0.7\" stroke-width=\"0.35\" x1=\"682.0\" x2=\"682.0\" y1=\"514.0\" y2=\"548.0\"></line><line opacity=\"0.7\" stroke-width=\"0.35\" x1=\"687.0\" x2=\"687.0\" y1=\"514.0\" y2=\"548.0\"></line><line opacity=\"0.7\" stroke-width=\"0.35\" x1=\"692.0\" x2=\"692.0\" y1=\"514.0\" y2=\"548.0\"></line><line opacity=\"0.7\" stroke-width=\"0.35\" x1=\"697.0\" x2=\"697.0\" y1=\"514.0\" y2=\"548.0\"></line><line opacity=\"0.7\" stroke-width=\"0.35\" x1=\"702.0\" x2=\"702.0\" y1=\"514.0\" y2=\"548.0\"></line><line opacity=\"0.7\" stroke-width=\"0.35\" x1=\"707.0\" x2=\"707.0\" y1=\"514.0\" y2=\"548.0\"></line><line opacity=\"0.7\" stroke-width=\"0.35\" x1=\"712.0\" x2=\"712.0\" y1=\"514.0\" y2=\"548.0\"></line><rect fill=\"#FBF9F4\" height=\"12.0\" stroke-width=\"1.2\" width=\"127.0\" x=\"845.0\" y=\"448.0\"></rect><rect fill=\"none\" height=\"34.0\" stroke-width=\"0.9\" width=\"127.0\" x=\"845.0\" y=\"414.0\"></rect><line opacity=\"0.7\" stroke-width=\"0.35\" x1=\"849.0\" x2=\"849.0\" y1=\"414.0\" y2=\"448.0\"></line><line opacity=\"0.7\" stroke-width=\"0.35\" x1=\"854.0\" x2=\"854.0\" y1=\"414.0\" y2=\"448.0\"></line><line opacity=\"0.7\" stroke-width=\"0.35\" x1=\"859.0\" x2=\"859.0\" y1=\"414.0\" y2=\"448.0\"></line><line opacity=\"0.7\" stroke-width=\"0.35\" x1=\"864.0\" x2=\"864.0\" y1=\"414.0\" y2=\"448.0\"></line><line opacity=\"0.7\" stroke-width=\"0.35\" x1=\"869.0\" x2=\"869.0\" y1=\"414.0\" y2=\"448.0\"></line><line opacity=\"0.7\" stroke-width=\"0.35\" x1=\"874.0\" x2=\"874.0\" y1=\"414.0\" y2=\"448.0\"></line><line opacity=\"0.7\" stroke-width=\"0.35\" x1=\"879.0\" x2=\"879.0\" y1=\"414.0\" y2=\"448.0\"></line><line opacity=\"0.7\" stroke-width=\"0.35\" x1=\"884.0\" x2=\"884.0\" y1=\"414.0\" y2=\"448.0\"></line><line opacity=\"0.7\" stroke-width=\"0.35\" x1=\"889.0\" x2=\"889.0\" y1=\"414.0\" y2=\"448.0\"></line><line opacity=\"0.7\" stroke-width=\"0.35\" x1=\"894.0\" x2=\"894.0\" y1=\"414.0\" y2=\"448.0\"></line><line opacity=\"0.7\" stroke-width=\"0.35\" x1=\"899.0\" x2=\"899.0\" y1=\"414.0\" y2=\"448.0\"></line><line opacity=\"0.7\" stroke-width=\"0.35\" x1=\"904.0\" x2=\"904.0\" y1=\"414.0\" y2=\"448.0\"></line><line opacity=\"0.7\" stroke-width=\"0.35\" x1=\"909.0\" x2=\"909.0\" y1=\"414.0\" y2=\"448.0\"></line><line opacity=\"0.7\" stroke-width=\"0.35\" x1=\"914.0\" x2=\"914.0\" y1=\"414.0\" y2=\"448.0\"></line><line opacity=\"0.7\" stroke-width=\"0.35\" x1=\"919.0\" x2=\"919.0\" y1=\"414.0\" y2=\"448.0\"></line><line opacity=\"0.7\" stroke-width=\"0.35\" x1=\"924.0\" x2=\"924.0\" y1=\"414.0\" y2=\"448.0\"></line><line opacity=\"0.7\" stroke-width=\"0.35\" x1=\"929.0\" x2=\"929.0\" y1=\"414.0\" y2=\"448.0\"></line><line opacity=\"0.7\" stroke-width=\"0.35\" x1=\"934.0\" x2=\"934.0\" y1=\"414.0\" y2=\"448.0\"></line><line opacity=\"0.7\" stroke-width=\"0.35\" x1=\"939.0\" x2=\"939.0\" y1=\"414.0\" y2=\"448.0\"></line><line opacity=\"0.7\" stroke-width=\"0.35\" x1=\"944.0\" x2=\"944.0\" y1=\"414.0\" y2=\"448.0\"></line><line opacity=\"0.7\" stroke-width=\"0.35\" x1=\"949.0\" x2=\"949.0\" y1=\"414.0\" y2=\"448.0\"></line><line opacity=\"0.7\" stroke-width=\"0.35\" x1=\"954.0\" x2=\"954.0\" y1=\"414.0\" y2=\"448.0\"></line><line opacity=\"0.7\" stroke-width=\"0.35\" x1=\"959.0\" x2=\"959.0\" y1=\"414.0\" y2=\"448.0\"></line><line opacity=\"0.7\" stroke-width=\"0.35\" x1=\"964.0\" x2=\"964.0\" y1=\"414.0\" y2=\"448.0\"></line><line opacity=\"0.7\" stroke-width=\"0.35\" x1=\"969.0\" x2=\"969.0\" y1=\"414.0\" y2=\"448.0\"></line><rect fill=\"#FBF9F4\" height=\"12.0\" stroke-width=\"1.2\" width=\"127.0\" x=\"845.0\" y=\"548.0\"></rect><rect fill=\"none\" height=\"34.0\" stroke-width=\"0.9\" width=\"127.0\" x=\"845.0\" y=\"514.0\"></rect><line opacity=\"0.7\" stroke-width=\"0.35\" x1=\"849.0\" x2=\"849.0\" y1=\"514.0\" y2=\"548.0\"></line><line opacity=\"0.7\" stroke-width=\"0.35\" x1=\"854.0\" x2=\"854.0\" y1=\"514.0\" y2=\"548.0\"></line><line opacity=\"0.7\" stroke-width=\"0.35\" x1=\"859.0\" x2=\"859.0\" y1=\"514.0\" y2=\"548.0\"></line><line opacity=\"0.7\" stroke-width=\"0.35\" x1=\"864.0\" x2=\"864.0\" y1=\"514.0\" y2=\"548.0\"></line><line opacity=\"0.7\" stroke-width=\"0.35\" x1=\"869.0\" x2=\"869.0\" y1=\"514.0\" y2=\"548.0\"></line><line opacity=\"0.7\" stroke-width=\"0.35\" x1=\"874.0\" x2=\"874.0\" y1=\"514.0\" y2=\"548.0\"></line><line opacity=\"0.7\" stroke-width=\"0.35\" x1=\"879.0\" x2=\"879.0\" y1=\"514.0\" y2=\"548.0\"></line><line opacity=\"0.7\" stroke-width=\"0.35\" x1=\"884.0\" x2=\"884.0\" y1=\"514.0\" y2=\"548.0\"></line><line opacity=\"0.7\" stroke-width=\"0.35\" x1=\"889.0\" x2=\"889.0\" y1=\"514.0\" y2=\"548.0\"></line><line opacity=\"0.7\" stroke-width=\"0.35\" x1=\"894.0\" x2=\"894.0\" y1=\"514.0\" y2=\"548.0\"></line><line opacity=\"0.7\" stroke-width=\"0.35\" x1=\"899.0\" x2=\"899.0\" y1=\"514.0\" y2=\"548.0\"></line><line opacity=\"0.7\" stroke-width=\"0.35\" x1=\"904.0\" x2=\"904.0\" y1=\"514.0\" y2=\"548.0\"></line><line opacity=\"0.7\" stroke-width=\"0.35\" x1=\"909.0\" x2=\"909.0\" y1=\"514.0\" y2=\"548.0\"></line><line opacity=\"0.7\" stroke-width=\"0.35\" x1=\"914.0\" x2=\"914.0\" y1=\"514.0\" y2=\"548.0\"></line><line opacity=\"0.7\" stroke-width=\"0.35\" x1=\"919.0\" x2=\"919.0\" y1=\"514.0\" y2=\"548.0\"></line><line opacity=\"0.7\" stroke-width=\"0.35\" x1=\"924.0\" x2=\"924.0\" y1=\"514.0\" y2=\"548.0\"></line><line opacity=\"0.7\" stroke-width=\"0.35\" x1=\"929.0\" x2=\"929.0\" y1=\"514.0\" y2=\"548.0\"></line><line opacity=\"0.7\" stroke-width=\"0.35\" x1=\"934.0\" x2=\"934.0\" y1=\"514.0\" y2=\"548.0\"></line><line opacity=\"0.7\" stroke-width=\"0.35\" x1=\"939.0\" x2=\"939.0\" y1=\"514.0\" y2=\"548.0\"></line><line opacity=\"0.7\" stroke-width=\"0.35\" x1=\"944.0\" x2=\"944.0\" y1=\"514.0\" y2=\"548.0\"></line><line opacity=\"0.7\" stroke-width=\"0.35\" x1=\"949.0\" x2=\"949.0\" y1=\"514.0\" y2=\"548.0\"></line><line opacity=\"0.7\" stroke-width=\"0.35\" x1=\"954.0\" x2=\"954.0\" y1=\"514.0\" y2=\"548.0\"></line><line opacity=\"0.7\" stroke-width=\"0.35\" x1=\"959.0\" x2=\"959.0\" y1=\"514.0\" y2=\"548.0\"></line><line opacity=\"0.7\" stroke-width=\"0.35\" x1=\"964.0\" x2=\"964.0\" y1=\"514.0\" y2=\"548.0\"></line><line opacity=\"0.7\" stroke-width=\"0.35\" x1=\"969.0\" x2=\"969.0\" y1=\"514.0\" y2=\"548.0\"></line><rect fill=\"#FBF9F4\" height=\"12.0\" stroke-width=\"1.2\" width=\"72.0\" x=\"1100.0\" y=\"448.0\"></rect><rect fill=\"none\" height=\"34.0\" stroke-width=\"0.9\" width=\"72.0\" x=\"1100.0\" y=\"414.0\"></rect><line opacity=\"0.7\" stroke-width=\"0.35\" x1=\"1104.0\" x2=\"1104.0\" y1=\"414.0\" y2=\"448.0\"></line><line opacity=\"0.7\" stroke-width=\"0.35\" x1=\"1109.0\" x2=\"1109.0\" y1=\"414.0\" y2=\"448.0\"></line><line opacity=\"0.7\" stroke-width=\"0.35\" x1=\"1114.0\" x2=\"1114.0\" y1=\"414.0\" y2=\"448.0\"></line><line opacity=\"0.7\" stroke-width=\"0.35\" x1=\"1119.0\" x2=\"1119.0\" y1=\"414.0\" y2=\"448.0\"></line><line opacity=\"0.7\" stroke-width=\"0.35\" x1=\"1124.0\" x2=\"1124.0\" y1=\"414.0\" y2=\"448.0\"></line><line opacity=\"0.7\" stroke-width=\"0.35\" x1=\"1129.0\" x2=\"1129.0\" y1=\"414.0\" y2=\"448.0\"></line><line opacity=\"0.7\" stroke-width=\"0.35\" x1=\"1134.0\" x2=\"1134.0\" y1=\"414.0\" y2=\"448.0\"></line><line opacity=\"0.7\" stroke-width=\"0.35\" x1=\"1139.0\" x2=\"1139.0\" y1=\"414.0\" y2=\"448.0\"></line><line opacity=\"0.7\" stroke-width=\"0.35\" x1=\"1144.0\" x2=\"1144.0\" y1=\"414.0\" y2=\"448.0\"></line><line opacity=\"0.7\" stroke-width=\"0.35\" x1=\"1149.0\" x2=\"1149.0\" y1=\"414.0\" y2=\"448.0\"></line><line opacity=\"0.7\" stroke-width=\"0.35\" x1=\"1154.0\" x2=\"1154.0\" y1=\"414.0\" y2=\"448.0\"></line><line opacity=\"0.7\" stroke-width=\"0.35\" x1=\"1159.0\" x2=\"1159.0\" y1=\"414.0\" y2=\"448.0\"></line><line opacity=\"0.7\" stroke-width=\"0.35\" x1=\"1164.0\" x2=\"1164.0\" y1=\"414.0\" y2=\"448.0\"></line><line opacity=\"0.7\" stroke-width=\"0.35\" x1=\"1169.0\" x2=\"1169.0\" y1=\"414.0\" y2=\"448.0\"></line><rect fill=\"#FBF9F4\" height=\"12.0\" stroke-width=\"1.2\" width=\"72.0\" x=\"1100.0\" y=\"548.0\"></rect><rect fill=\"none\" height=\"34.0\" stroke-width=\"0.9\" width=\"72.0\" x=\"1100.0\" y=\"514.0\"></rect><line opacity=\"0.7\" stroke-width=\"0.35\" x1=\"1104.0\" x2=\"1104.0\" y1=\"514.0\" y2=\"548.0\"></line><line opacity=\"0.7\" stroke-width=\"0.35\" x1=\"1109.0\" x2=\"1109.0\" y1=\"514.0\" y2=\"548.0\"></line><line opacity=\"0.7\" stroke-width=\"0.35\" x1=\"1114.0\" x2=\"1114.0\" y1=\"514.0\" y2=\"548.0\"></line><line opacity=\"0.7\" stroke-width=\"0.35\" x1=\"1119.0\" x2=\"1119.0\" y1=\"514.0\" y2=\"548.0\"></line><line opacity=\"0.7\" stroke-width=\"0.35\" x1=\"1124.0\" x2=\"1124.0\" y1=\"514.0\" y2=\"548.0\"></line><line opacity=\"0.7\" stroke-width=\"0.35\" x1=\"1129.0\" x2=\"1129.0\" y1=\"514.0\" y2=\"548.0\"></line><line opacity=\"0.7\" stroke-width=\"0.35\" x1=\"1134.0\" x2=\"1134.0\" y1=\"514.0\" y2=\"548.0\"></line><line opacity=\"0.7\" stroke-width=\"0.35\" x1=\"1139.0\" x2=\"1139.0\" y1=\"514.0\" y2=\"548.0\"></line><line opacity=\"0.7\" stroke-width=\"0.35\" x1=\"1144.0\" x2=\"1144.0\" y1=\"514.0\" y2=\"548.0\"></line><line opacity=\"0.7\" stroke-width=\"0.35\" x1=\"1149.0\" x2=\"1149.0\" y1=\"514.0\" y2=\"548.0\"></line><line opacity=\"0.7\" stroke-width=\"0.35\" x1=\"1154.0\" x2=\"1154.0\" y1=\"514.0\" y2=\"548.0\"></line><line opacity=\"0.7\" stroke-width=\"0.35\" x1=\"1159.0\" x2=\"1159.0\" y1=\"514.0\" y2=\"548.0\"></line><line opacity=\"0.7\" stroke-width=\"0.35\" x1=\"1164.0\" x2=\"1164.0\" y1=\"514.0\" y2=\"548.0\"></line><line opacity=\"0.7\" stroke-width=\"0.35\" x1=\"1169.0\" x2=\"1169.0\" y1=\"514.0\" y2=\"548.0\"></line><rect fill=\"none\" height=\"46.0\" stroke-width=\"1.0\" width=\"56.0\" x=\"56.0\" y=\"322.0\"></rect><rect fill=\"#FBF9F4\" height=\"10.0\" stroke-width=\"1.2\" width=\"56.0\" x=\"56.0\" y=\"368.0\"></rect><line opacity=\"0.7\" stroke-width=\"0.35\" x1=\"60.0\" x2=\"60.0\" y1=\"322.0\" y2=\"368.0\"></line><line opacity=\"0.7\" stroke-width=\"0.35\" x1=\"65.0\" x2=\"65.0\" y1=\"322.0\" y2=\"368.0\"></line><line opacity=\"0.7\" stroke-width=\"0.35\" x1=\"70.0\" x2=\"70.0\" y1=\"322.0\" y2=\"368.0\"></line><line opacity=\"0.7\" stroke-width=\"0.35\" x1=\"75.0\" x2=\"75.0\" y1=\"322.0\" y2=\"368.0\"></line><line opacity=\"0.7\" stroke-width=\"0.35\" x1=\"80.0\" x2=\"80.0\" y1=\"322.0\" y2=\"368.0\"></line><line opacity=\"0.7\" stroke-width=\"0.35\" x1=\"85.0\" x2=\"85.0\" y1=\"322.0\" y2=\"368.0\"></line><line opacity=\"0.7\" stroke-width=\"0.35\" x1=\"90.0\" x2=\"90.0\" y1=\"322.0\" y2=\"368.0\"></line><line opacity=\"0.7\" stroke-width=\"0.35\" x1=\"95.0\" x2=\"95.0\" y1=\"322.0\" y2=\"368.0\"></line><line opacity=\"0.7\" stroke-width=\"0.35\" x1=\"100.0\" x2=\"100.0\" y1=\"322.0\" y2=\"368.0\"></line><line opacity=\"0.7\" stroke-width=\"0.35\" x1=\"105.0\" x2=\"105.0\" y1=\"322.0\" y2=\"368.0\"></line><line opacity=\"0.7\" stroke-width=\"0.35\" x1=\"110.0\" x2=\"110.0\" y1=\"322.0\" y2=\"368.0\"></line><rect fill=\"none\" height=\"46.0\" stroke-width=\"1.0\" width=\"56.0\" x=\"56.0\" y=\"416.0\"></rect><rect fill=\"#FBF9F4\" height=\"10.0\" stroke-width=\"1.2\" width=\"56.0\" x=\"56.0\" y=\"462.0\"></rect><line opacity=\"0.7\" stroke-width=\"0.35\" x1=\"60.0\" x2=\"60.0\" y1=\"416.0\" y2=\"462.0\"></line><line opacity=\"0.7\" stroke-width=\"0.35\" x1=\"65.0\" x2=\"65.0\" y1=\"416.0\" y2=\"462.0\"></line><line opacity=\"0.7\" stroke-width=\"0.35\" x1=\"70.0\" x2=\"70.0\" y1=\"416.0\" y2=\"462.0\"></line><line opacity=\"0.7\" stroke-width=\"0.35\" x1=\"75.0\" x2=\"75.0\" y1=\"416.0\" y2=\"462.0\"></line><line opacity=\"0.7\" stroke-width=\"0.35\" x1=\"80.0\" x2=\"80.0\" y1=\"416.0\" y2=\"462.0\"></line><line opacity=\"0.7\" stroke-width=\"0.35\" x1=\"85.0\" x2=\"85.0\" y1=\"416.0\" y2=\"462.0\"></line><line opacity=\"0.7\" stroke-width=\"0.35\" x1=\"90.0\" x2=\"90.0\" y1=\"416.0\" y2=\"462.0\"></line><line opacity=\"0.7\" stroke-width=\"0.35\" x1=\"95.0\" x2=\"95.0\" y1=\"416.0\" y2=\"462.0\"></line><line opacity=\"0.7\" stroke-width=\"0.35\" x1=\"100.0\" x2=\"100.0\" y1=\"416.0\" y2=\"462.0\"></line><line opacity=\"0.7\" stroke-width=\"0.35\" x1=\"105.0\" x2=\"105.0\" y1=\"416.0\" y2=\"462.0\"></line><line opacity=\"0.7\" stroke-width=\"0.35\" x1=\"110.0\" x2=\"110.0\" y1=\"416.0\" y2=\"462.0\"></line><rect fill=\"#FBF9F4\" height=\"6.0\" stroke-width=\"1.2\" width=\"64.0\" x=\"612.0\" y=\"600.0\"></rect><line stroke-width=\"1.4\" x1=\"70.0\" x2=\"70.0\" y1=\"690.0\" y2=\"634.2\"></line><line stroke-width=\"0.8\" x1=\"70.0\" x2=\"48.3\" y1=\"655.9\" y2=\"624.9\"></line><line stroke-width=\"0.8\" x1=\"70.0\" x2=\"88.6\" y1=\"646.6\" y2=\"618.7\"></line><polyline fill=\"none\" opacity=\"1\" points=\"131.5,588.0 126.6,599.4 125.4,611.3 118.1,621.1 108.2,628.5 99.6,637.4 86.9,639.7 75.0,644.4 62.4,642.3 50.2,640.0 37.8,637.0 25.7,631.8 20.3,620.3 13.5,610.6 7.2,600.0 3.8,588.0 7.5,576.1 12.5,565.0 16.0,552.9 29.0,547.5 36.5,536.8 49.8,534.9 62.3,533.3 74.8,533.4 87.4,534.8 100.6,537.0 108.8,547.0 119.2,554.2 126.0,564.5 128.5,576.3 130.9,588.0\" stroke-width=\"0.9\"></polyline><polyline fill=\"none\" opacity=\"0.6\" points=\"123.1,587.3 124.5,598.6 119.4,608.9 112.8,618.2 105.8,627.5 95.5,633.5 84.2,637.2 72.8,642.2 60.3,641.7 49.0,637.0 37.1,634.1 27.4,627.2 17.6,620.0 12.0,609.6 10.7,598.2 5.4,587.3 11.7,576.6 13.7,565.6 18.1,555.0 28.9,548.8 37.4,540.9 49.3,538.6 60.3,533.1 72.8,532.5 84.6,535.9 96.7,539.1 104.8,548.2 114.6,555.1 120.2,565.3 124.0,576.0 124.5,587.3\" stroke-width=\"0.5\"></polyline><polyline fill=\"none\" opacity=\"0.6\" points=\"127.1,594.4 127.0,605.0 120.4,613.9 117.7,624.5 109.8,632.2 101.3,640.0 90.1,643.6 78.3,643.2 67.1,643.7 55.6,642.9 46.7,635.8 36.4,631.5 30.0,622.9 24.8,614.0 21.7,604.3 16.7,594.4 21.3,584.3 24.1,574.5 29.1,565.2 34.9,555.7 46.6,552.7 55.9,546.9 67.0,544.2 78.6,542.5 90.1,545.1 101.0,549.3 108.4,557.9 116.5,565.1 121.9,574.2 128.1,583.5 129.8,594.4\" stroke-width=\"0.5\"></polyline><line opacity=\"0.55\" stroke-width=\"0.45\" x1=\"63.8\" x2=\"55.8\" y1=\"561.2\" y2=\"635.2\"></line><line opacity=\"0.55\" stroke-width=\"0.45\" x1=\"68.1\" x2=\"60.1\" y1=\"561.1\" y2=\"635.4\"></line><line opacity=\"0.55\" stroke-width=\"0.45\" x1=\"72.4\" x2=\"64.4\" y1=\"561.1\" y2=\"635.4\"></line><line opacity=\"0.55\" stroke-width=\"0.45\" x1=\"76.7\" x2=\"68.7\" y1=\"561.2\" y2=\"635.2\"></line><line opacity=\"0.55\" stroke-width=\"0.45\" x1=\"81.0\" x2=\"73.0\" y1=\"561.5\" y2=\"634.7\"></line><line opacity=\"0.55\" stroke-width=\"0.45\" x1=\"85.3\" x2=\"77.3\" y1=\"562.0\" y2=\"634.1\"></line><line opacity=\"0.55\" stroke-width=\"0.45\" x1=\"89.6\" x2=\"81.6\" y1=\"562.6\" y2=\"633.2\"></line><line opacity=\"0.55\" stroke-width=\"0.45\" x1=\"93.8\" x2=\"85.8\" y1=\"563.3\" y2=\"632.0\"></line><line opacity=\"0.55\" stroke-width=\"0.45\" x1=\"98.1\" x2=\"90.1\" y1=\"564.3\" y2=\"630.6\"></line><line opacity=\"0.55\" stroke-width=\"0.45\" x1=\"102.4\" x2=\"94.4\" y1=\"565.4\" y2=\"628.8\"></line><line opacity=\"0.55\" stroke-width=\"0.45\" x1=\"106.7\" x2=\"98.7\" y1=\"566.8\" y2=\"626.8\"></line><line opacity=\"0.55\" stroke-width=\"0.45\" x1=\"111.0\" x2=\"103.0\" y1=\"568.5\" y2=\"624.3\"></line><line opacity=\"0.55\" stroke-width=\"0.45\" x1=\"115.3\" x2=\"107.3\" y1=\"570.5\" y2=\"621.3\"></line><line opacity=\"0.55\" stroke-width=\"0.45\" x1=\"119.6\" x2=\"111.6\" y1=\"572.9\" y2=\"617.6\"></line><line stroke-width=\"1.4\" x1=\"165.0\" x2=\"165.0\" y1=\"690.0\" y2=\"637.8\"></line><line stroke-width=\"0.8\" x1=\"165.0\" x2=\"144.7\" y1=\"658.1\" y2=\"629.1\"></line><line stroke-width=\"0.8\" x1=\"165.0\" x2=\"182.4\" y1=\"649.4\" y2=\"623.3\"></line><polyline fill=\"none\" opacity=\"1\" points=\"218.7,594.6 217.4,605.4 215.1,616.3 209.5,626.3 200.1,633.3 189.8,638.5 180.0,644.9 168.2,647.0 156.1,648.0 143.5,647.7 132.7,641.7 123.3,634.3 114.7,626.3 108.3,616.7 108.0,605.2 101.9,594.6 103.9,583.2 107.2,572.1 113.9,562.3 123.8,555.4 133.5,548.9 145.0,545.9 156.1,540.8 168.0,543.9 179.4,546.1 190.4,549.7 199.7,556.3 208.4,563.7 212.8,573.9 216.1,584.1 218.2,594.6\" stroke-width=\"0.9\"></polyline><polyline fill=\"none\" opacity=\"0.6\" points=\"213.7,596.1 217.1,606.9 212.2,616.7 204.4,624.6 197.4,632.5 188.7,638.9 178.4,643.2 167.3,644.1 155.9,647.7 144.1,646.2 134.6,639.4 125.4,633.3 119.5,624.4 114.0,615.7 109.3,606.4 108.6,596.1 106.7,585.3 113.7,576.4 119.8,568.0 123.7,557.2 134.5,552.5 145.6,550.1 156.1,546.0 167.2,548.6 178.7,548.3 190.4,550.6 199.6,557.5 206.8,566.0 210.4,576.2 214.4,585.8 214.5,596.1\" stroke-width=\"0.5\"></polyline><polyline fill=\"none\" opacity=\"0.6\" points=\"219.6,597.5 216.2,607.1 212.5,616.0 209.8,625.9 203.0,634.0 193.6,639.6 183.4,643.5 172.7,645.6 161.7,645.3 151.8,640.9 141.6,638.2 133.5,631.9 127.8,623.8 122.7,615.7 118.4,607.0 117.4,597.5 116.3,587.5 118.4,577.5 126.1,570.0 131.5,561.0 140.4,554.8 150.7,550.8 161.9,551.4 172.4,552.1 182.5,554.0 191.9,558.0 200.3,563.6 209.0,569.5 215.7,577.6 218.8,587.4 218.1,597.5\" stroke-width=\"0.5\"></polyline><line opacity=\"0.55\" stroke-width=\"0.45\" x1=\"159.2\" x2=\"151.2\" y1=\"569.5\" y2=\"638.8\"></line><line opacity=\"0.55\" stroke-width=\"0.45\" x1=\"163.2\" x2=\"155.2\" y1=\"569.4\" y2=\"638.9\"></line><line opacity=\"0.55\" stroke-width=\"0.45\" x1=\"167.2\" x2=\"159.2\" y1=\"569.4\" y2=\"638.9\"></line><line opacity=\"0.55\" stroke-width=\"0.45\" x1=\"171.2\" x2=\"163.2\" y1=\"569.5\" y2=\"638.7\"></line><line opacity=\"0.55\" stroke-width=\"0.45\" x1=\"175.3\" x2=\"167.3\" y1=\"569.8\" y2=\"638.3\"></line><line opacity=\"0.55\" stroke-width=\"0.45\" x1=\"179.3\" x2=\"171.3\" y1=\"570.2\" y2=\"637.7\"></line><line opacity=\"0.55\" stroke-width=\"0.45\" x1=\"183.3\" x2=\"175.3\" y1=\"570.8\" y2=\"636.8\"></line><line opacity=\"0.55\" stroke-width=\"0.45\" x1=\"187.3\" x2=\"179.3\" y1=\"571.5\" y2=\"635.7\"></line><line opacity=\"0.55\" stroke-width=\"0.45\" x1=\"191.3\" x2=\"183.3\" y1=\"572.4\" y2=\"634.4\"></line><line opacity=\"0.55\" stroke-width=\"0.45\" x1=\"195.3\" x2=\"187.3\" y1=\"573.5\" y2=\"632.8\"></line><line opacity=\"0.55\" stroke-width=\"0.45\" x1=\"199.4\" x2=\"191.4\" y1=\"574.8\" y2=\"630.8\"></line><line opacity=\"0.55\" stroke-width=\"0.45\" x1=\"203.4\" x2=\"195.4\" y1=\"576.3\" y2=\"628.5\"></line><line opacity=\"0.55\" stroke-width=\"0.45\" x1=\"207.4\" x2=\"199.4\" y1=\"578.2\" y2=\"625.7\"></line><line opacity=\"0.55\" stroke-width=\"0.45\" x1=\"211.4\" x2=\"203.4\" y1=\"580.5\" y2=\"622.3\"></line><line stroke-width=\"1.4\" x1=\"392.0\" x2=\"392.0\" y1=\"668.0\" y2=\"632.0\"></line><line stroke-width=\"0.8\" x1=\"392.0\" x2=\"378.0\" y1=\"646.0\" y2=\"626.0\"></line><line stroke-width=\"0.8\" x1=\"392.0\" x2=\"404.0\" y1=\"640.0\" y2=\"622.0\"></line><polyline fill=\"none\" opacity=\"1\" points=\"431.6,606.4 433.0,614.2 431.3,622.0 426.5,628.6 420.7,634.4 413.2,638.2 405.2,640.3 397.5,644.1 389.1,642.4 380.5,642.4 372.3,639.8 366.7,633.5 361.2,627.8 355.0,622.0 353.2,614.2 354.5,606.4 355.6,599.0 358.0,592.0 359.6,583.9 365.6,578.2 373.9,575.7 380.5,570.3 388.8,568.0 397.5,569.2 405.4,571.9 413.3,574.4 419.0,580.1 424.0,585.8 431.5,590.7 432.9,598.6 433.3,606.4\" stroke-width=\"0.9\"></polyline><polyline fill=\"none\" opacity=\"0.6\" points=\"434.5,603.5 433.4,610.9 428.8,617.1 425.1,623.3 420.1,628.6 413.8,632.7 407.2,636.7 399.3,637.0 391.6,637.6 384.3,635.2 375.9,634.7 370.7,628.8 365.2,623.7 360.8,617.7 357.2,611.0 358.2,603.5 357.2,596.0 361.1,589.4 365.0,583.1 370.3,577.7 377.6,575.0 383.9,570.8 391.7,570.2 399.2,570.8 407.4,569.6 413.7,574.5 420.6,577.8 426.6,582.7 430.0,589.3 431.6,596.4 433.1,603.5\" stroke-width=\"0.5\"></polyline><polyline fill=\"none\" opacity=\"0.6\" points=\"426.3,606.3 427.1,613.0 423.8,619.1 420.3,624.9 416.6,631.0 410.1,634.3 403.4,637.3 396.2,639.3 388.6,639.8 381.6,636.9 374.6,634.6 368.9,630.4 363.9,625.3 359.7,619.7 358.2,613.0 357.1,606.3 358.1,599.6 358.9,592.5 363.4,586.9 368.0,581.3 374.1,577.0 381.8,576.2 388.7,573.9 396.3,572.6 403.7,574.4 409.4,579.2 415.1,583.1 420.8,587.3 423.2,593.7 426.0,599.7 426.1,606.3\" stroke-width=\"0.5\"></polyline><line opacity=\"0.55\" stroke-width=\"0.45\" x1=\"388.0\" x2=\"380.0\" y1=\"584.9\" y2=\"632.7\"></line><line opacity=\"0.55\" stroke-width=\"0.45\" x1=\"390.8\" x2=\"382.8\" y1=\"584.8\" y2=\"632.8\"></line><line opacity=\"0.55\" stroke-width=\"0.45\" x1=\"393.5\" x2=\"385.5\" y1=\"584.8\" y2=\"632.8\"></line><line opacity=\"0.55\" stroke-width=\"0.45\" x1=\"396.3\" x2=\"388.3\" y1=\"584.9\" y2=\"632.6\"></line><line opacity=\"0.55\" stroke-width=\"0.45\" x1=\"399.1\" x2=\"391.1\" y1=\"585.1\" y2=\"632.3\"></line><line opacity=\"0.55\" stroke-width=\"0.45\" x1=\"401.8\" x2=\"393.8\" y1=\"585.4\" y2=\"631.9\"></line><line opacity=\"0.55\" stroke-width=\"0.45\" x1=\"404.6\" x2=\"396.6\" y1=\"585.8\" y2=\"631.3\"></line><line opacity=\"0.55\" stroke-width=\"0.45\" x1=\"407.4\" x2=\"399.4\" y1=\"586.3\" y2=\"630.6\"></line><line opacity=\"0.55\" stroke-width=\"0.45\" x1=\"410.2\" x2=\"402.2\" y1=\"586.9\" y2=\"629.7\"></line><line opacity=\"0.55\" stroke-width=\"0.45\" x1=\"412.9\" x2=\"404.9\" y1=\"587.6\" y2=\"628.5\"></line><line opacity=\"0.55\" stroke-width=\"0.45\" x1=\"415.7\" x2=\"407.7\" y1=\"588.5\" y2=\"627.2\"></line><line opacity=\"0.55\" stroke-width=\"0.45\" x1=\"418.5\" x2=\"410.5\" y1=\"589.6\" y2=\"625.6\"></line><line opacity=\"0.55\" stroke-width=\"0.45\" x1=\"421.2\" x2=\"413.2\" y1=\"590.9\" y2=\"623.7\"></line><line opacity=\"0.55\" stroke-width=\"0.45\" x1=\"424.0\" x2=\"416.0\" y1=\"592.5\" y2=\"621.3\"></line><line stroke-width=\"1.4\" x1=\"815.0\" x2=\"815.0\" y1=\"660.0\" y2=\"624.0\"></line><line stroke-width=\"0.8\" x1=\"815.0\" x2=\"801.0\" y1=\"638.0\" y2=\"618.0\"></line><line stroke-width=\"0.8\" x1=\"815.0\" x2=\"827.0\" y1=\"632.0\" y2=\"614.0\"></line><polyline fill=\"none\" opacity=\"1\" points=\"857.9,598.3 854.1,605.7 853.7,613.6 849.2,620.2 842.2,624.6 837.1,631.4 829.3,634.9 820.4,633.8 812.0,636.5 804.1,632.9 796.4,630.1 788.3,627.0 782.9,620.6 781.1,612.7 777.5,605.9 776.3,598.3 777.9,590.7 780.9,583.8 784.6,577.0 789.0,570.3 797.3,567.9 803.9,563.1 812.2,561.9 820.3,563.4 828.5,563.9 836.6,566.0 843.2,570.9 847.3,577.6 854.7,582.6 856.6,590.4 858.2,598.3\" stroke-width=\"0.9\"></polyline><polyline fill=\"none\" opacity=\"0.6\" points=\"847.7,594.1 849.6,601.5 845.4,607.9 841.1,613.7 836.8,619.6 831.4,625.3 823.8,628.1 815.7,627.7 808.0,627.3 799.7,628.4 792.9,624.3 786.2,620.3 782.7,613.6 779.0,607.6 774.4,601.5 774.5,594.1 776.6,587.2 776.0,579.4 781.0,573.5 785.9,567.6 793.8,565.4 799.8,560.1 808.1,561.2 815.9,558.5 823.4,561.4 830.3,564.6 837.1,568.3 843.6,572.9 845.4,580.4 847.3,587.2 849.5,594.1\" stroke-width=\"0.5\"></polyline><polyline fill=\"none\" opacity=\"0.6\" points=\"846.9,592.9 845.8,599.3 844.1,605.7 840.8,611.6 836.0,616.5 831.0,621.6 823.6,623.0 816.6,625.1 809.3,624.0 802.2,623.2 796.2,619.6 789.9,616.3 785.8,611.0 780.0,606.4 778.3,599.6 778.8,592.9 778.6,586.2 779.4,579.1 785.6,574.6 788.6,568.0 795.4,565.0 802.0,562.1 809.1,559.6 816.5,561.0 823.8,562.1 830.8,564.3 837.6,567.6 840.9,574.1 846.1,579.3 848.1,586.0 848.6,592.9\" stroke-width=\"0.5\"></polyline><line opacity=\"0.55\" stroke-width=\"0.45\" x1=\"811.0\" x2=\"803.0\" y1=\"576.9\" y2=\"624.7\"></line><line opacity=\"0.55\" stroke-width=\"0.45\" x1=\"813.8\" x2=\"805.8\" y1=\"576.8\" y2=\"624.8\"></line><line opacity=\"0.55\" stroke-width=\"0.45\" x1=\"816.5\" x2=\"808.5\" y1=\"576.8\" y2=\"624.8\"></line><line opacity=\"0.55\" stroke-width=\"0.45\" x1=\"819.3\" x2=\"811.3\" y1=\"576.9\" y2=\"624.6\"></line><line opacity=\"0.55\" stroke-width=\"0.45\" x1=\"822.1\" x2=\"814.1\" y1=\"577.1\" y2=\"624.3\"></line><line opacity=\"0.55\" stroke-width=\"0.45\" x1=\"824.8\" x2=\"816.8\" y1=\"577.4\" y2=\"623.9\"></line><line opacity=\"0.55\" stroke-width=\"0.45\" x1=\"827.6\" x2=\"819.6\" y1=\"577.8\" y2=\"623.3\"></line><line opacity=\"0.55\" stroke-width=\"0.45\" x1=\"830.4\" x2=\"822.4\" y1=\"578.3\" y2=\"622.6\"></line><line opacity=\"0.55\" stroke-width=\"0.45\" x1=\"833.2\" x2=\"825.2\" y1=\"578.9\" y2=\"621.7\"></line><line opacity=\"0.55\" stroke-width=\"0.45\" x1=\"835.9\" x2=\"827.9\" y1=\"579.6\" y2=\"620.5\"></line><line opacity=\"0.55\" stroke-width=\"0.45\" x1=\"838.7\" x2=\"830.7\" y1=\"580.5\" y2=\"619.2\"></line><line opacity=\"0.55\" stroke-width=\"0.45\" x1=\"841.5\" x2=\"833.5\" y1=\"581.6\" y2=\"617.6\"></line><line opacity=\"0.55\" stroke-width=\"0.45\" x1=\"844.2\" x2=\"836.2\" y1=\"582.9\" y2=\"615.7\"></line><line opacity=\"0.55\" stroke-width=\"0.45\" x1=\"847.0\" x2=\"839.0\" y1=\"584.5\" y2=\"613.3\"></line><line stroke-width=\"1.4\" x1=\"1030.0\" x2=\"1030.0\" y1=\"668.0\" y2=\"621.2\"></line><line stroke-width=\"0.8\" x1=\"1030.0\" x2=\"1011.8\" y1=\"639.4\" y2=\"613.4\"></line><line stroke-width=\"0.8\" x1=\"1030.0\" x2=\"1045.6\" y1=\"631.6\" y2=\"608.2\"></line><polyline fill=\"none\" opacity=\"1\" points=\"1078.9,583.6 1078.2,593.2 1074.7,602.2 1072.3,612.4 1063.2,618.3 1054.4,623.6 1044.6,627.2 1034.9,632.8 1023.6,632.9 1012.9,629.9 1003.8,624.1 995.3,618.2 988.0,611.1 981.9,603.0 980.1,593.2 977.5,583.6 979.6,573.9 979.5,563.2 985.2,554.1 994.3,547.9 1003.9,543.2 1012.4,536.0 1023.9,536.9 1034.6,536.7 1044.5,540.4 1054.9,542.6 1063.9,548.1 1071.3,555.5 1075.3,564.7 1080.1,573.6 1078.7,583.6\" stroke-width=\"0.9\"></polyline><polyline fill=\"none\" opacity=\"0.6\" points=\"1076.5,581.5 1073.7,590.4 1070.6,598.9 1066.9,607.4 1059.9,614.0 1052.8,620.8 1043.3,624.4 1033.4,627.4 1022.9,626.9 1012.7,625.2 1002.7,621.9 995.8,614.6 989.3,607.5 981.3,600.7 982.0,590.5 978.1,581.5 979.6,572.0 985.5,564.1 987.2,554.2 994.1,546.8 1003.4,542.1 1012.7,537.7 1022.8,535.4 1033.0,538.4 1043.3,538.6 1052.6,542.6 1061.9,547.0 1068.9,554.3 1074.2,562.6 1076.3,572.1 1078.9,581.5\" stroke-width=\"0.5\"></polyline><polyline fill=\"none\" opacity=\"0.6\" points=\"1076.0,586.3 1074.1,594.7 1071.7,602.8 1068.0,610.7 1060.9,616.4 1055.1,624.0 1045.7,626.6 1036.3,628.8 1026.6,628.7 1017.1,627.1 1008.6,622.8 1002.4,616.1 993.3,611.8 988.6,603.9 986.7,595.1 985.5,586.3 986.0,577.5 991.5,570.0 993.6,561.0 1001.6,555.8 1009.6,551.4 1017.7,547.2 1026.6,543.5 1036.1,545.7 1045.9,545.3 1055.4,548.2 1062.1,555.1 1068.0,561.9 1073.2,569.3 1077.0,577.4 1078.4,586.3\" stroke-width=\"0.5\"></polyline><line opacity=\"0.55\" stroke-width=\"0.45\" x1=\"1024.8\" x2=\"1016.8\" y1=\"560.0\" y2=\"622.1\"></line><line opacity=\"0.55\" stroke-width=\"0.45\" x1=\"1028.4\" x2=\"1020.4\" y1=\"559.9\" y2=\"622.2\"></line><line opacity=\"0.55\" stroke-width=\"0.45\" x1=\"1032.0\" x2=\"1024.0\" y1=\"559.9\" y2=\"622.2\"></line><line opacity=\"0.55\" stroke-width=\"0.45\" x1=\"1035.6\" x2=\"1027.6\" y1=\"560.0\" y2=\"622.0\"></line><line opacity=\"0.55\" stroke-width=\"0.45\" x1=\"1039.2\" x2=\"1031.2\" y1=\"560.2\" y2=\"621.6\"></line><line opacity=\"0.55\" stroke-width=\"0.45\" x1=\"1042.8\" x2=\"1034.8\" y1=\"560.6\" y2=\"621.1\"></line><line opacity=\"0.55\" stroke-width=\"0.45\" x1=\"1046.4\" x2=\"1038.4\" y1=\"561.1\" y2=\"620.3\"></line><line opacity=\"0.55\" stroke-width=\"0.45\" x1=\"1050.0\" x2=\"1042.0\" y1=\"561.8\" y2=\"619.4\"></line><line opacity=\"0.55\" stroke-width=\"0.45\" x1=\"1053.6\" x2=\"1045.6\" y1=\"562.6\" y2=\"618.2\"></line><line opacity=\"0.55\" stroke-width=\"0.45\" x1=\"1057.2\" x2=\"1049.2\" y1=\"563.5\" y2=\"616.7\"></line><line opacity=\"0.55\" stroke-width=\"0.45\" x1=\"1060.8\" x2=\"1052.8\" y1=\"564.7\" y2=\"615.0\"></line><line opacity=\"0.55\" stroke-width=\"0.45\" x1=\"1064.4\" x2=\"1056.4\" y1=\"566.1\" y2=\"612.9\"></line><line opacity=\"0.55\" stroke-width=\"0.45\" x1=\"1068.0\" x2=\"1060.0\" y1=\"567.8\" y2=\"610.4\"></line><line opacity=\"0.55\" stroke-width=\"0.45\" x1=\"1071.6\" x2=\"1063.6\" y1=\"569.8\" y2=\"607.3\"></line><line stroke-width=\"1.4\" x1=\"1150.0\" x2=\"1150.0\" y1=\"665.0\" y2=\"625.4\"></line><line stroke-width=\"0.8\" x1=\"1150.0\" x2=\"1134.6\" y1=\"640.8\" y2=\"618.8\"></line><line stroke-width=\"0.8\" x1=\"1150.0\" x2=\"1163.2\" y1=\"634.2\" y2=\"614.4\"></line><polyline fill=\"none\" opacity=\"1\" points=\"1193.1,595.7 1192.5,603.9 1190.1,611.8 1187.4,620.1 1179.8,625.2 1173.1,631.0 1163.9,632.4 1155.3,634.2 1146.4,635.1 1137.1,634.9 1128.5,631.5 1121.0,626.4 1116.1,619.0 1110.7,612.2 1108.0,604.1 1107.1,595.7 1109.5,587.6 1109.2,578.6 1116.4,572.7 1120.1,564.2 1128.0,559.2 1138.0,559.1 1146.4,555.6 1155.7,554.2 1165.2,555.4 1172.8,560.9 1179.7,566.4 1185.5,572.6 1192.9,578.5 1192.7,587.6 1195.3,595.7\" stroke-width=\"0.9\"></polyline><polyline fill=\"none\" opacity=\"0.6\" points=\"1190.4,594.8 1186.1,602.4 1186.1,610.8 1180.6,617.2 1175.9,624.2 1168.2,628.4 1159.6,630.0 1151.6,634.1 1142.8,632.6 1135.0,629.3 1127.5,626.1 1119.5,623.0 1113.8,617.0 1110.1,610.0 1108.1,602.4 1106.4,594.8 1107.4,587.0 1108.1,578.8 1115.3,573.5 1118.8,565.8 1125.8,560.7 1134.8,560.0 1142.6,555.3 1151.5,556.1 1160.4,557.2 1167.4,562.5 1174.5,566.9 1180.2,572.7 1186.8,578.5 1188.0,586.8 1187.9,594.8\" stroke-width=\"0.5\"></polyline><polyline fill=\"none\" opacity=\"0.6\" points=\"1186.4,592.8 1185.8,599.9 1186.0,607.8 1180.1,613.3 1176.5,620.4 1168.3,622.9 1161.1,625.9 1153.5,628.3 1145.5,627.1 1137.6,626.3 1129.2,625.1 1122.5,620.3 1117.1,614.4 1113.6,607.5 1110.0,600.5 1109.0,592.8 1111.4,585.4 1113.3,578.0 1119.5,572.8 1122.9,565.7 1130.2,562.1 1137.2,558.1 1145.3,556.9 1153.4,558.1 1160.8,560.5 1169.6,560.6 1174.4,567.3 1180.7,571.9 1184.2,578.5 1186.5,585.5 1189.1,592.8\" stroke-width=\"0.5\"></polyline><line opacity=\"0.55\" stroke-width=\"0.45\" x1=\"1145.6\" x2=\"1137.6\" y1=\"573.6\" y2=\"626.1\"></line><line opacity=\"0.55\" stroke-width=\"0.45\" x1=\"1148.6\" x2=\"1140.6\" y1=\"573.5\" y2=\"626.3\"></line><line opacity=\"0.55\" stroke-width=\"0.45\" x1=\"1151.7\" x2=\"1143.7\" y1=\"573.5\" y2=\"626.3\"></line><line opacity=\"0.55\" stroke-width=\"0.45\" x1=\"1154.7\" x2=\"1146.7\" y1=\"573.6\" y2=\"626.1\"></line><line opacity=\"0.55\" stroke-width=\"0.45\" x1=\"1157.8\" x2=\"1149.8\" y1=\"573.8\" y2=\"625.8\"></line><line opacity=\"0.55\" stroke-width=\"0.45\" x1=\"1160.8\" x2=\"1152.8\" y1=\"574.1\" y2=\"625.3\"></line><line opacity=\"0.55\" stroke-width=\"0.45\" x1=\"1163.9\" x2=\"1155.9\" y1=\"574.6\" y2=\"624.7\"></line><line opacity=\"0.55\" stroke-width=\"0.45\" x1=\"1166.9\" x2=\"1158.9\" y1=\"575.1\" y2=\"623.8\"></line><line opacity=\"0.55\" stroke-width=\"0.45\" x1=\"1170.0\" x2=\"1162.0\" y1=\"575.8\" y2=\"622.8\"></line><line opacity=\"0.55\" stroke-width=\"0.45\" x1=\"1173.0\" x2=\"1165.0\" y1=\"576.6\" y2=\"621.6\"></line><line opacity=\"0.55\" stroke-width=\"0.45\" x1=\"1176.1\" x2=\"1168.1\" y1=\"577.6\" y2=\"620.1\"></line><line opacity=\"0.55\" stroke-width=\"0.45\" x1=\"1179.1\" x2=\"1171.1\" y1=\"578.8\" y2=\"618.4\"></line><line opacity=\"0.55\" stroke-width=\"0.45\" x1=\"1182.2\" x2=\"1174.2\" y1=\"580.2\" y2=\"616.2\"></line><line opacity=\"0.55\" stroke-width=\"0.45\" x1=\"1185.2\" x2=\"1177.2\" y1=\"581.9\" y2=\"613.6\"></line><path d=\"M 0 652 Q 6 648 12 652 Q 18 646 24 652 Q 30 648 36 652 Q 42 646 48 652 Q 54 648 60 652 Q 66 646 72 652 Q 78 648 84 652 Q 90 646 96 652 Q 102 648 108 652 Q 114 646 120 652 Q 126 648 132 652 Q 138 646 144 652 Q 150 648 156 652 Q 162 646 168 652 Q 174 648 180 652 Q 186 646 192 652 Q 198 648 204 652 Q 210 646 216 652 Q 222 648 228 652 Q 234 646 240 652 Q 246 648 252 652 Q 258 646 264 652 Q 270 648 276 652 Q 282 646 288 652 Q 294 648 300 652 Q 306 646 312 652 Q 318 648 324 652 Q 330 646 336 652 Q 342 648 348 652 Q 354 646 360 652 Q 366 648 372 652 Q 378 646 384 652 Q 390 648 396 652 Q 402 646 408 652 Q 414 648 420 652 Q 426 646 432 652 Q 438 648 444 652 Q 450 646 456 652 Q 462 648 468 652 Q 474 646 480 652 Q 486 648 492 652 Q 498 646 504 652 Q 510 648 516 652 Q 522 646 528 652 Q 534 648 540 652 Q 546 646 552 652 Q 558 648 564 652 Q 570 646 576 652 Q 582 648 588 652 Q 594 646 600 652 Q 606 648 612 652 Q 618 646 624 652 Q 630 648 636 652 Q 642 646 648 652 Q 654 648 660 652 Q 666 646 672 652 Q 678 648 684 652 Q 690 646 696 652 Q 702 648 708 652 Q 714 646 720 652 Q 726 648 732 652 Q 738 646 744 652 Q 750 648 756 652 Q 762 646 768 652 Q 774 648 780 652 Q 786 646 792 652 Q 798 648 804 652 Q 810 646 816 652 Q 822 648 828 652 Q 834 646 840 652 Q 846 648 852 652 Q 858 646 864 652 Q 870 648 876 652 Q 882 646 888 652 Q 894 648 900 652 Q 906 646 912 652 Q 918 648 924 652 Q 930 646 936 652 Q 942 648 948 652 Q 954 646 960 652 Q 966 648 972 652 Q 978 646 984 652 Q 990 648 996 652 Q 1002 646 1008 652 Q 1014 648 1020 652 Q 1026 646 1032 652 Q 1038 648 1044 652 Q 1050 646 1056 652 Q 1062 648 1068 652 Q 1074 646 1080 652 Q 1086 648 1092 652 Q 1098 646 1104 652 Q 1110 648 1116 652 Q 1122 646 1128 652 Q 1134 648 1140 652 Q 1146 646 1152 652 Q 1158 648 1164 652 Q 1170 646 1176 652\" fill=\"none\" opacity=\".7\" stroke-width=\".7\"></path></g><g class=\"dim\"><line x1=\"20\" x2=\"20\" y1=\"640\" y2=\"238\"></line><line x1=\"12\" x2=\"38\" y1=\"640\" y2=\"640\"></line><line x1=\"15\" x2=\"25\" y1=\"645\" y2=\"635\"></line><text class=\"dl\" x=\"28\" y=\"634\">\u00b10,00</text><line x1=\"12\" x2=\"38\" y1=\"552\" y2=\"552\"></line><line x1=\"15\" x2=\"25\" y1=\"557\" y2=\"547\"></line><text class=\"dl\" x=\"28\" y=\"546\">+3,20</text><line x1=\"12\" x2=\"38\" y1=\"452\" y2=\"452\"></line><line x1=\"15\" x2=\"25\" y1=\"457\" y2=\"447\"></line><text class=\"dl\" x=\"28\" y=\"446\">+6,40</text><line x1=\"12\" x2=\"38\" y1=\"352\" y2=\"352\"></line><line x1=\"15\" x2=\"25\" y1=\"357\" y2=\"347\"></line><text class=\"dl\" x=\"28\" y=\"346\">+9,60</text><line x1=\"12\" x2=\"38\" y1=\"238\" y2=\"238\"></line><line x1=\"15\" x2=\"25\" y1=\"243\" y2=\"233\"></line><text class=\"dl\" x=\"28\" y=\"232\">+13,40</text><line x1=\"112\" x2=\"1170\" y1=\"196\" y2=\"196\"></line><line x1=\"112\" x2=\"112\" y1=\"188\" y2=\"210\"></line><line x1=\"107\" x2=\"117\" y1=\"201\" y2=\"191\"></line><line x1=\"663\" x2=\"663\" y1=\"188\" y2=\"210\"></line><line x1=\"658\" x2=\"668\" y1=\"201\" y2=\"191\"></line><line x1=\"1170\" x2=\"1170\" y1=\"188\" y2=\"210\"></line><line x1=\"1165\" x2=\"1175\" y1=\"201\" y2=\"191\"></line><text class=\"dc\" x=\"387\" y=\"189\">18,40</text><text class=\"dc\" x=\"916\" y=\"189\">24,60</text><line x1=\"112\" x2=\"1170\" y1=\"176\" y2=\"176\"></line><line x1=\"112\" x2=\"112\" y1=\"168\" y2=\"190\"></line><line x1=\"107\" x2=\"117\" y1=\"181\" y2=\"171\"></line><line x1=\"1170\" x2=\"1170\" y1=\"168\" y2=\"190\"></line><line x1=\"1165\" x2=\"1175\" y1=\"181\" y2=\"171\"></line><text class=\"dc\" x=\"641\" y=\"169\">43,00 m</text><text class=\"tb\" text-anchor=\"end\" x=\"1150\" y=\"44\">RESIDENZE PARCO \u00b7 PARMA</text><text class=\"tb2\" text-anchor=\"end\" x=\"1150\" y=\"64\">PROSPETTO SUD \u00b7 SCALA 1:200 \u00b7 TAV. A-04</text></g></symbol></svg>"; document.body.insertBefore(sp.firstChild, document.body.firstChild); }
  if (document.querySelector('use[href^="#ic-"]') && !document.getElementById('ic-meta')){ var ic = document.createElement('div'); ic.innerHTML = "<svg aria-hidden=\"true\" style=\"position:absolute\" height=\"0\" width=\"0\">\n  <symbol id=\"ic-meta\" viewBox=\"0 0 24 24\"><path d=\"M6.915 4.03c-1.968 0-3.683 1.28-4.871 3.113C.704 9.208 0 11.883 0 14.449c0 .706.07 1.369.21 1.973a6.624 6.624 0 0 0 .265.86 5.297 5.297 0 0 0 .371.761c.696 1.159 1.818 1.927 3.593 1.927 1.497 0 2.633-.671 3.965-2.444.76-1.012 1.144-1.626 2.663-4.32l.756-1.339.186-.325c.061.1.121.196.183.3l2.152 3.595c.724 1.21 1.665 2.556 2.47 3.314 1.046.987 1.992 1.22 3.06 1.22 1.075 0 1.876-.355 2.455-.843a3.743 3.743 0 0 0 .81-.973c.542-.939.861-2.127.861-3.745 0-2.72-.681-5.357-2.084-7.45-1.282-1.912-2.957-2.93-4.716-2.93-1.047 0-2.088.467-3.053 1.308-.652.57-1.257 1.29-1.82 2.05-.69-.875-1.335-1.547-1.958-2.056-1.182-.966-2.315-1.303-3.454-1.303zm10.16 2.053c1.147 0 2.188.758 2.992 1.999 1.132 1.748 1.647 4.195 1.647 6.4 0 1.548-.368 2.9-1.839 2.9-.58 0-1.027-.23-1.664-1.004-.496-.601-1.343-1.878-2.832-4.358l-.617-1.028a44.908 44.908 0 0 0-1.255-1.98c.07-.109.141-.224.211-.327 1.12-1.667 2.118-2.602 3.358-2.602zm-10.201.553c1.265 0 2.058.791 2.675 1.446.307.327.737.871 1.234 1.579l-1.02 1.566c-.757 1.163-1.882 3.017-2.837 4.338-1.191 1.649-1.81 1.817-2.486 1.817-.524 0-1.038-.237-1.383-.794-.263-.426-.464-1.13-.464-2.046 0-2.221.63-4.535 1.66-6.088.454-.687.964-1.226 1.533-1.533a2.264 2.264 0 0 1 1.088-.285z\" fill=\"#0467DF\"></path></symbol>\n  <symbol id=\"ic-ig\" viewBox=\"0 0 24 24\"><path d=\"M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077\" fill=\"#FF0069\"></path></symbol>\n  <symbol id=\"ic-fb\" viewBox=\"0 0 24 24\"><path d=\"M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z\" fill=\"#0866FF\"></path></symbol>\n  <symbol id=\"ic-oai\" viewBox=\"0 0 24 24\"><path d=\"M9.205 8.658v-2.26c0-.19.072-.333.238-.428l4.543-2.616c.619-.357 1.356-.523 2.117-.523 2.854 0 4.662 2.212 4.662 4.566 0 .167 0 .357-.024.547l-4.71-2.759a.797.797 0 00-.856 0l-5.97 3.473zm10.609 8.8V12.06c0-.333-.143-.57-.429-.737l-5.97-3.473 1.95-1.118a.433.433 0 01.476 0l4.543 2.617c1.309.76 2.189 2.378 2.189 3.948 0 1.808-1.07 3.473-2.76 4.163zM7.802 12.703l-1.95-1.142c-.167-.095-.239-.238-.239-.428V5.899c0-2.545 1.95-4.472 4.591-4.472 1 0 1.927.333 2.712.928L8.23 5.067c-.285.166-.428.404-.428.737v6.898zM12 15.128l-2.795-1.57v-3.33L12 8.658l2.795 1.57v3.33L12 15.128zm1.796 7.23c-1 0-1.927-.332-2.712-.927l4.686-2.712c.285-.166.428-.404.428-.737v-6.898l1.974 1.142c.167.095.238.238.238.428v5.233c0 2.545-1.974 4.472-4.614 4.472zm-5.637-5.303l-4.544-2.617c-1.308-.761-2.188-2.378-2.188-3.948A4.482 4.482 0 014.21 6.327v5.423c0 .333.143.571.428.738l5.947 3.449-1.95 1.118a.432.432 0 01-.476 0zm-.262 3.9c-2.688 0-4.662-2.021-4.662-4.519 0-.19.024-.38.047-.57l4.686 2.71c.286.167.571.167.856 0l5.97-3.448v2.26c0 .19-.07.333-.237.428l-4.543 2.616c-.619.357-1.356.523-2.117.523zm5.899 2.83a5.947 5.947 0 005.827-4.756C22.287 18.339 24 15.84 24 13.296c0-1.665-.713-3.282-1.998-4.448.119-.5.19-.999.19-1.498 0-3.401-2.759-5.947-5.946-5.947-.642 0-1.26.095-1.88.31A5.962 5.962 0 0010.205 0a5.947 5.947 0 00-5.827 4.757C1.713 5.447 0 7.945 0 10.49c0 1.666.713 3.283 1.998 4.448-.119.5-.19 1-.19 1.499 0 3.401 2.759 5.946 5.946 5.946.642 0 1.26-.095 1.88-.309a5.96 5.96 0 004.162 1.713z\" fill=\"#000\" fill-rule=\"evenodd\"></path></symbol>\n  <symbol id=\"ic-ga4\" viewBox=\"0 0 24 24\"><path d=\"M22.84 2.9982v17.9987c.0086 1.6473-1.3197 2.9897-2.967 2.9984a2.9808 2.9808 0 01-.3677-.0208c-1.528-.226-2.6477-1.5558-2.6105-3.1V3.1204c-.0369-1.5458 1.0856-2.8762 2.6157-3.1 1.6361-.1915 3.1178.9796 3.3093 2.6158.014.1201.0208.241.0202.3619zM4.1326 18.0548c-1.6417 0-2.9726 1.331-2.9726 2.9726C1.16 22.6691 2.4909 24 4.1326 24s2.9726-1.3309 2.9726-2.9726-1.331-2.9726-2.9726-2.9726zm7.8728-9.0098c-.0171 0-.0342 0-.0513.0003-1.6495.0904-2.9293 1.474-2.891 3.1256v7.9846c0 2.167.9535 3.4825 2.3505 3.763 1.6118.3266 3.1832-.7152 3.5098-2.327.04-.1974.06-.3983.0593-.5998v-8.9585c.003-1.6474-1.33-2.9852-2.9773-2.9882z\" fill=\"#E37400\"></path></symbol>\n</svg>"; document.body.insertBefore(ic.firstElementChild, document.body.firstChild); }
  [].forEach.call(document.querySelectorAll('svg'), function(sv){ if (!sv.querySelector('lineargradient,radialgradient,clippath')) return; var t = document.createElement('div'); t.innerHTML = sv.outerHTML; if (t.firstElementChild) sv.parentNode.replaceChild(t.firstElementChild, sv); });
  [].forEach.call(document.querySelectorAll('[data-style]'), function(el){ el.style.cssText += ';' + el.getAttribute('data-style'); });
  [].forEach.call(document.querySelectorAll('.sx_row'), function(r){ if (r.dataset.dup) return; r.dataset.dup = 1; var c = document.createElement('div'); c.innerHTML = r.innerHTML; [].slice.call(c.children).forEach(function(t){ t.setAttribute('aria-hidden','true'); r.appendChild(t); }); });
  var path = location.pathname.replace(/\/$/, '') || '/';
  [].forEach.call(document.querySelectorAll('.nav_links > a[href], .nav_dd > a[href]'), function(a){ var h = (a.getAttribute('href') || '').split('#')[0].replace(/\/$/, ''); if (h && h !== '/' && h === path) a.setAttribute('aria-current', 'page'); });
  if (/^\/(soluzioni|sviluppatori|agenzie)$/.test(path)) [].forEach.call(document.querySelectorAll('.nav_dd > a.nav_dd_t'), function(a){ a.setAttribute('aria-current', 'page'); });
  if (!document.getElementById('audit')) [].forEach.call(document.querySelectorAll('a[href="#audit"]'), function(a){ a.setAttribute('href', '/#audit'); });
  if (path === '/') [].forEach.call(document.querySelectorAll('a.nav_logo'), function(a){ a.setAttribute('href', '#top'); });

(function(){
  var LOGO = {"gads": "https://s3.amazonaws.com/webflow-prod-assets/6ac0d032fb0cd97884ba849a/6ac0ef3a373103ea9d8f070a_gads.webp", "immoIcon": "https://s3.amazonaws.com/webflow-prod-assets/6ac0d032fb0cd97884ba849a/6ac0ef3a687a84362de2b8b7_immoIcon.png", "ideaIcon": "https://s3.amazonaws.com/webflow-prod-assets/6ac0d032fb0cd97884ba849a/6ac0ef3a4b73a87c957eff36_ideaIcon.png", "casaIcon": "https://s3.amazonaws.com/webflow-prod-assets/6ac0d032fb0cd97884ba849a/6ac0ef3a85edc228caa95e65_casaIcon.png", "immoWord": "https://s3.amazonaws.com/webflow-prod-assets/6ac0d032fb0cd97884ba849a/6ac0ef3a17c04dbca5172fe0_immoWord.webp", "ideaWord": "https://s3.amazonaws.com/webflow-prod-assets/6ac0d032fb0cd97884ba849a/6ac0ef3ad7a7ad8cc7e295b2_ideaWord.webp", "casaWord": "https://s3.amazonaws.com/webflow-prod-assets/6ac0d032fb0cd97884ba849a/6ac0ef3ad46e0009ca0df34b_casaWord.webp"};
  [].forEach.call(document.querySelectorAll('img[data-src]'), function(img){ if (LOGO[img.dataset.src]) img.src = LOGO[img.dataset.src]; });

  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var dpr = Math.min(window.devicePixelRatio || 1, 2);
  function hash(i){ var x = Math.sin(i * 127.1 + 311.7) * 43758.5453; return x - Math.floor(x); }
  function sm(x){ x = Math.min(1, Math.max(0, x)); return x*x*(3-2*x); }

  /* ================= Scene library (V1) ================= */
  var PAL = {
    day:  {sky:['#8FB8D2','#E6EEF0'], ground:['#D5D9CF','#B9BFB2'], front:['#F4F1EB','#D9D3C9'], side:['#BCB6AC','#A29C92'], top:'#FBF9F5', glass:['#4F6F86','#A9C4D3'], slab:'#FFFFFF', lit:null, litP:0, tree:['#8DB387','#3E6A45'], trunk:'#5B4E42', shadow:'rgba(40,52,46,.30)', sun:null},
    dusk: {sky:['#1D2542','#E7A072'], ground:['#5B4F45','#2B2622'], front:['#DCC8B1','#AE957C'], side:['#7B6A5C','#5A4D43'], top:'#EADBC8', glass:['#27323F','#566274'], slab:'#F2E4D2', lit:'#FFC47A', litP:.42, tree:['#5F7E62','#243A2B'], trunk:'#3A302A', shadow:'rgba(0,0,0,.38)', sun:'rgba(255,196,140,.55)'},
    night:{sky:['#03070A','#0F1D19'], ground:['#0C1210','#050807'], front:['#2B332F','#1B211E'], side:['#151A18','#0E1210'], top:'#343C38', glass:['#0A1210','#16211E'], slab:'#3B4540', lit:'#F6C27E', litP:.36, tree:['#24392C','#0D1812'], trunk:'#101512', shadow:'rgba(0,0,0,.5)', sun:null}
  };
  function add(a,b){ return [a[0]+b[0], a[1]+b[1]]; }
  function lerp(a,b,t){ return [a[0]+(b[0]-a[0])*t, a[1]+(b[1]-a[1])*t]; }
  function qpt(q,u,v){ return lerp(lerp(q[0],q[1],u), lerp(q[3],q[2],u), v); }
  function poly(ctx, pts){ ctx.beginPath(); ctx.moveTo(pts[0][0],pts[0][1]); for (var i=1;i<pts.length;i++) ctx.lineTo(pts[i][0],pts[i][1]); ctx.closePath(); }
  function sub(q,u0,u1,v0,v1){ return [qpt(q,u0,v0), qpt(q,u1,v0), qpt(q,u1,v1), qpt(q,u0,v1)]; }
  function roundRect(ctx, x, y, w, h, r){ ctx.beginPath(); ctx.moveTo(x+r,y); ctx.arcTo(x+w,y,x+w,y+h,r); ctx.arcTo(x+w,y+h,x,y+h,r); ctx.arcTo(x,y+h,x,y,r); ctx.arcTo(x,y,x+w,y,r); ctx.closePath(); }
  function volumes(st){
    var by = st.y + st.h;
    return [
      {bx:st.x + st.w*.03, w:st.w*.34, h:st.h*.9,  d:st.w*.2,  n:8, cf:5, cs:3, id:1},
      {bx:st.x + st.w*.5,  w:st.w*.32, h:st.h*.56, d:st.w*.18, n:5, cf:5, cs:3, id:2}
    ].map(function(v){
      var off = [v.d*.62, -v.d*.34];
      var F = [[v.bx, by - v.h],[v.bx + v.w, by - v.h],[v.bx + v.w, by],[v.bx, by]];
      v.F = F; v.S = [F[1], add(F[1],off), add(F[2],off), F[2]]; v.T = [F[0], F[1], add(F[1],off), add(F[0],off)]; v.by = by; return v;
    });
  }
  function trees(st){ var by = st.y + st.h; return [[-.02,.15],[.44,.12],[.95,.16]].map(function(t,i){ return {x:st.x + st.w*t[0], y:by + st.h*.03, r:st.h*t[1], i:i}; }); }
  function faceGrad(ctx, q, cols){ var g = ctx.createLinearGradient(q[0][0], q[0][1], q[3][0], q[3][1]); g.addColorStop(0, cols[0]); g.addColorStop(1, cols[1]); return g; }
  function drawVolume(ctx, v, p, mode){
    poly(ctx, v.S); ctx.fillStyle = faceGrad(ctx, v.S, p.side); ctx.fill();
    poly(ctx, v.F); ctx.fillStyle = faceGrad(ctx, v.F, p.front); ctx.fill();
    poly(ctx, v.T); ctx.fillStyle = p.top; ctx.fill();
    [[v.F, v.cf, 0], [v.S, v.cs, 1]].forEach(function(face){
      var q = face[0], cols = face[1], isSide = face[2];
      for (var f = 0; f < v.n; f++){
        for (var i = 0; i < cols; i++){
          var w = sub(q, (i+.14)/cols, (i+.86)/cols, (f+.2)/v.n, (f+.9)/v.n);
          var on = p.lit && hash(v.id*1000 + isSide*500 + f*20 + i) < p.litP;
          poly(ctx, w);
          if (on){ ctx.fillStyle = p.lit; if (mode === 'night'){ ctx.shadowColor = p.lit; ctx.shadowBlur = 14*dpr; } }
          else { var g = ctx.createLinearGradient(w[0][0], w[0][1], w[3][0], w[3][1]); g.addColorStop(0, p.glass[isSide ? 0 : 1]); g.addColorStop(1, p.glass[0]); ctx.fillStyle = g; }
          ctx.fill(); ctx.shadowBlur = 0;
          if (isSide){ poly(ctx, w); ctx.fillStyle = 'rgba(0,0,0,.18)'; ctx.fill(); }
        }
        if (f > 0){ poly(ctx, sub(q, 0, 1, f/v.n - .018, f/v.n + .01)); ctx.fillStyle = isSide ? 'rgba(0,0,0,.08)' : p.slab; ctx.globalAlpha = isSide ? 1 : .9; ctx.fill(); ctx.globalAlpha = 1; }
      }
    });
    ctx.strokeStyle = p.slab; ctx.lineWidth = 1.5*dpr; poly(ctx, v.T); ctx.stroke();
  }
  function drawTree(ctx, t, p){
    ctx.fillStyle = p.trunk; ctx.fillRect(t.x - t.r*.05, t.y - t.r*1.1, t.r*.1, t.r*1.1);
    [[0,-1.55,1],[.45,-1.25,.72],[-.4,-1.2,.66]].forEach(function(b){
      var cx = t.x + b[0]*t.r, cy = t.y + b[1]*t.r, r = b[2]*t.r;
      var g = ctx.createRadialGradient(cx - r*.35, cy - r*.4, r*.1, cx, cy, r); g.addColorStop(0, p.tree[0]); g.addColorStop(1, p.tree[1]);
      ctx.fillStyle = g; ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI*2); ctx.fill();
    });
  }
  function drawRender(ctx, W, H, mode, st){
    var p = PAL[mode], by = st.y + st.h, hy = by - st.h*.14;
    var g = ctx.createLinearGradient(0,0,0,hy); g.addColorStop(0,p.sky[0]); g.addColorStop(1,p.sky[1]);
    ctx.fillStyle = g; ctx.fillRect(0,0,W,hy);
    if (p.sun){ var s = ctx.createRadialGradient(W*.85, hy, 0, W*.85, hy, W*.5); s.addColorStop(0,p.sun); s.addColorStop(1,'rgba(255,196,140,0)'); ctx.fillStyle = s; ctx.fillRect(0,0,W,hy); }
    if (mode === 'night'){ for (var i=0;i<70;i++){ ctx.fillStyle = 'rgba(255,255,255,' + (.15 + hash(i)*.5) + ')'; ctx.fillRect(hash(i+3)*W, hash(i+9)*hy*.7, dpr, dpr); } }
    var gg = ctx.createLinearGradient(0,hy,0,H); gg.addColorStop(0,p.ground[0]); gg.addColorStop(1,p.ground[1]);
    ctx.fillStyle = gg; ctx.fillRect(0,hy,W,H-hy);
    var vs = volumes(st);
    vs.forEach(function(v){
      ctx.save(); ctx.fillStyle = p.shadow; ctx.filter = 'blur(' + Math.round(8*dpr) + 'px)';
      poly(ctx, [v.F[3], v.F[2], [v.F[2][0] - v.w*.2, v.by + st.h*.08], [v.F[3][0] - v.w*.35, v.by + st.h*.08]]); ctx.fill(); ctx.restore();
    });
    vs.forEach(function(v){ drawVolume(ctx, v, p, mode); });
    var hz = ctx.createLinearGradient(0, by - st.h*.25, 0, by + st.h*.1);
    hz.addColorStop(0, 'rgba(255,255,255,0)'); hz.addColorStop(1, mode === 'day' ? 'rgba(255,255,255,.28)' : 'rgba(0,0,0,.18)');
    ctx.fillStyle = hz; ctx.fillRect(0, by - st.h*.25, W, st.h*.35);
    trees(st).forEach(function(t){ drawTree(ctx, t, p); });
  }
  function grid(ctx, W, H, color, step){ ctx.strokeStyle = color; ctx.lineWidth = 1; ctx.beginPath(); for (var x=0;x<W;x+=step){ ctx.moveTo(x,0); ctx.lineTo(x,H); } for (var y=0;y<H;y+=step){ ctx.moveTo(0,y); ctx.lineTo(W,y); } ctx.stroke(); }
  function drawWire(ctx, W, H, st, ink){
    ctx.strokeStyle = ink; ctx.lineWidth = Math.max(1, dpr*.9);
    var vs = volumes(st), by = st.y + st.h;
    ctx.beginPath(); ctx.moveTo(0, by); ctx.lineTo(W, by); ctx.stroke();
    vs.forEach(function(v){
      [v.F, v.S, v.T].forEach(function(q){ poly(ctx, q); ctx.stroke(); });
      [[v.F, v.cf],[v.S, v.cs]].forEach(function(face){
        var q = face[0], cols = face[1];
        ctx.setLineDash([3*dpr, 3*dpr]);
        for (var f = 1; f < v.n; f++){ var a = qpt(q,0,f/v.n), b = qpt(q,1,f/v.n); ctx.beginPath(); ctx.moveTo(a[0],a[1]); ctx.lineTo(b[0],b[1]); ctx.stroke(); }
        ctx.setLineDash([]); ctx.globalAlpha = .7;
        for (var f2 = 0; f2 < v.n; f2++) for (var i = 0; i < cols; i++){ poly(ctx, sub(q, (i+.14)/cols, (i+.86)/cols, (f2+.2)/v.n, (f2+.9)/v.n)); ctx.stroke(); }
        ctx.globalAlpha = 1;
      });
    });
    trees(st).forEach(function(t){ ctx.beginPath(); ctx.arc(t.x, t.y - t.r*1.55, t.r, 0, Math.PI*2); ctx.stroke(); ctx.beginPath(); ctx.moveTo(t.x, t.y); ctx.lineTo(t.x, t.y - t.r*.55); ctx.stroke(); });
  }
  function drawPlan(ctx, W, H){
    var ink = '#9FD4FF';
    ctx.fillStyle = '#0E2231'; ctx.fillRect(0,0,W,H);
    grid(ctx, W, H, 'rgba(159,212,255,.08)', 18*dpr);
    var m = W*.12, x0 = m, y0 = H*.14, pw = W - 2*m, ph = H*.62;
    var rooms = [[0,0,.58,.62,'SOGGIORNO 28 m²'],[.58,0,.42,.55,'CAMERA 14 m²'],[.58,.55,.42,.45,'CAMERA 11 m²'],[0,.62,.3,.38,'BAGNO'],[.3,.62,.28,.38,'CUCINA']];
    var fs = Math.max(8*dpr, W/46);
    ctx.font = '500 ' + fs + 'px "Geist Mono", monospace';
    rooms.forEach(function(r, i){
      var rx = x0 + pw*r[0], ry = y0 + ph*r[1], rw = pw*r[2], rh = ph*r[3];
      ctx.fillStyle = i === 0 ? 'rgba(127,211,160,.14)' : 'rgba(159,212,255,.06)'; ctx.fillRect(rx, ry, rw, rh);
      ctx.strokeStyle = ink; ctx.lineWidth = Math.max(1, dpr); ctx.strokeRect(rx, ry, rw, rh);
      ctx.fillStyle = ink; ctx.fillText(r[4], rx + fs*.8, ry + fs*1.8);
    });
    ctx.lineWidth = 3*dpr; ctx.strokeRect(x0, y0, pw, ph);
    ctx.setLineDash([4*dpr,4*dpr]); ctx.lineWidth = dpr; ctx.strokeRect(x0, y0 + ph, pw, H*.12); ctx.setLineDash([]);
    ctx.fillText('TERRAZZO 12 m²', x0 + fs*.8, y0 + ph + H*.08);
    ctx.fillStyle = '#7FD3A0'; ctx.fillText('TRILOCALE · 92 m²', x0, y0 - fs*.9);
  }
  function drawPortal(ctx, W0, H){
    ctx.fillStyle = '#F1F3F2'; ctx.fillRect(0,0,W0,H);
    ctx.fillStyle = '#FFFFFF'; ctx.fillRect(0,0,W0,H*.14);
    var W = Math.min(W0, H*1.5); ctx.save(); ctx.translate((W0 - W)/2, 0);
    var fs = W/40;
    ctx.fillStyle = '#E7EAE8'; roundRect(ctx, W*.05, H*.035, W*.6, H*.07, H*.035); ctx.fill();
    ctx.fillStyle = '#4A524D'; ctx.font = '500 ' + fs + 'px Inter, sans-serif'; ctx.fillText('Milano · Nuove costruzioni · Trilocali', W*.08, H*.08);
    function card(y, alpha, v){
      ctx.globalAlpha = alpha;
      var x = W*.05, cw = W*.9, ch = H*.36;
      ctx.save(); ctx.shadowColor = 'rgba(0,0,0,.12)'; ctx.shadowBlur = 16*dpr; ctx.shadowOffsetY = 4*dpr;
      roundRect(ctx, x, y, cw, ch, W*.015); ctx.fillStyle = '#fff'; ctx.fill(); ctx.restore();
      var iw = cw*.44;
      ctx.save(); roundRect(ctx, x, y, iw, ch, W*.015); ctx.clip(); ctx.translate(x, y);
      if (v === 'plan') drawPlan(ctx, iw, ch); else drawRender(ctx, iw, ch, 'day', {x:iw*.08, y:ch*.2, w:iw*.84, h:ch*.58});
      ctx.restore();
      ctx.fillStyle = '#1D2420'; roundRect(ctx, x + W*.015, y + W*.015, W*.14, fs*1.5, fs*.3); ctx.fill();
      ctx.fillStyle = '#fff'; ctx.font = '600 ' + fs*.8 + 'px Inter, sans-serif'; ctx.fillText('In evidenza', x + W*.025, y + W*.015 + fs*1.05);
      var tx = x + iw + W*.03;
      ctx.fillStyle = '#6B736E'; ctx.font = '500 ' + fs*.78 + 'px "Geist Mono", monospace'; ctx.fillText('NUOVA COSTRUZIONE', tx, y + ch*.2);
      ctx.fillStyle = '#1D2420'; ctx.font = '600 ' + fs*1.15 + 'px Inter, sans-serif'; ctx.fillText('Trilocale con terrazzo', tx, y + ch*.38);
      ctx.fillStyle = '#4A524D'; ctx.font = '400 ' + fs*.9 + 'px Inter, sans-serif'; ctx.fillText('92 m² · 3 locali · 2 bagni · Box', tx, y + ch*.54);
      ctx.fillStyle = '#1D2420'; ctx.font = '650 ' + fs + 'px Inter, sans-serif'; ctx.fillText('Prezzo su richiesta', tx, y + ch*.76);
      ctx.fillStyle = '#1D2420'; roundRect(ctx, x + cw - W*.16, y + ch*.66, W*.13, fs*1.9, fs*.4); ctx.fill();
      ctx.fillStyle = '#fff'; ctx.font = '600 ' + fs*.85 + 'px Inter, sans-serif'; ctx.fillText('Contatta', x + cw - W*.14, y + ch*.66 + fs*1.25);
      ctx.globalAlpha = 1;
    }
    card(H*.2, 1, 'render');
    card(H*.62, .45, 'plan');
    ctx.restore();
  }
  function drawLanding(ctx, W, H){
    var bg = ctx.createLinearGradient(0,0,W,H); bg.addColorStop(0,'#E9EEEA'); bg.addColorStop(1,'#D6E0DA');
    ctx.fillStyle = bg; ctx.fillRect(0,0,W,H);
    var bw = Math.min(W*.86, H*1.9), bh = H*.86, bx = (W-bw)/2, by = H*.08, r = 12*dpr;
    ctx.save(); ctx.shadowColor='rgba(0,0,0,.25)'; ctx.shadowBlur=40*dpr; ctx.shadowOffsetY=16*dpr;
    roundRect(ctx,bx,by,bw,bh,r); ctx.fillStyle='#fff'; ctx.fill(); ctx.restore();
    var th = 30*dpr; ctx.fillStyle='#F3F3F1'; roundRect(ctx,bx,by,bw,th,r); ctx.fill(); ctx.fillRect(bx,by+th-r,bw,r);
    ['#E4705F','#E7B34C','#6BBE6B'].forEach(function(c,i){ ctx.fillStyle=c; ctx.beginPath(); ctx.arc(bx+16*dpr+i*14*dpr, by+th/2, 4.5*dpr,0,Math.PI*2); ctx.fill(); });
    ctx.fillStyle='#E4E4E1'; roundRect(ctx,bx+bw*.3,by+7*dpr,bw*.4,th-14*dpr,8*dpr); ctx.fill();
    ctx.fillStyle='#777'; ctx.font='500 '+10*dpr+'px Inter, sans-serif'; ctx.fillText('arialivingparma.it', bx+bw*.3+12*dpr, by+th/2+3.5*dpr);
    var cx = bx, cy = by+th, cw = bw, ch = bh-th, hw = cw*.58;
    ctx.save(); ctx.beginPath(); ctx.rect(cx,cy,hw,ch); ctx.clip(); ctx.translate(cx,cy);
    drawRender(ctx, hw, ch, 'dusk', {x:hw*.08,y:ch*.24,w:hw*.84,h:ch*.52});
    var g=ctx.createLinearGradient(0,ch*.5,0,ch); g.addColorStop(0,'rgba(0,0,0,0)'); g.addColorStop(1,'rgba(0,0,0,.6)'); ctx.fillStyle=g; ctx.fillRect(0,0,hw,ch);
    var fs = Math.max(12*dpr, hw/20);
    ctx.fillStyle='#fff'; ctx.font='600 '+fs*.55+'px Inter, sans-serif'; ctx.fillText('ARIA LIVING · PARMA', hw*.07, ch*.12);
    ctx.font='600 '+fs*1.3+'px "Inter Tight", Inter, sans-serif'; ctx.fillText('Vivere nel verde,', hw*.07, ch*.72); ctx.fillText('a Milano', hw*.07, ch*.72+fs*1.4);
    ctx.fillStyle='#B0573A'; roundRect(ctx,hw*.07,ch*.84+fs*.2,fs*6.4,fs*1.6,6*dpr); ctx.fill();
    ctx.fillStyle='#fff'; ctx.font='600 '+fs*.62+'px Inter, sans-serif'; ctx.fillText('Prenota una visita', hw*.07+fs*.6, ch*.84+fs*1.25);
    ctx.restore();
    var px = cx+hw+cw*.04, pw = cw-hw-cw*.08, fy = cy+ch*.1, f2 = Math.max(10*dpr, pw/20);
    ctx.fillStyle='#8A8A8A'; ctx.font='500 '+f2*.8+'px "Geist Mono", monospace'; ctx.fillText('SCEGLI LA TUA CASA', px, fy);
    var chips=['Tutti','Bilocali','Trilocali','Attici'], x=px;
    ctx.font='500 '+f2*.85+'px Inter, sans-serif';
    chips.forEach(function(c,i){ var w=ctx.measureText(c).width+f2*1.4; if (x+w>px+pw) return; ctx.fillStyle=i===2?'#171717':'#fff'; ctx.strokeStyle='#E2E2E0'; roundRect(ctx,x,fy+f2*.8,w,f2*1.9,f2); ctx.fill(); if(i!==2) ctx.stroke(); ctx.fillStyle=i===2?'#fff':'#333'; ctx.fillText(c,x+f2*.7,fy+f2*2.05); x+=w+f2*.5; });
    var uy = fy+f2*3.6, uh = (ch*.62)/3.3;
    [['Trilocale A2','92 m² · Piano 2'],['Trilocale B1','88 m² · Giardino'],['Trilocale C3','95 m² · Piano 3']].forEach(function(u,i){
      var yy=uy+i*(uh+f2*.6); ctx.fillStyle='#fff'; ctx.strokeStyle='#E7E7E4'; roundRect(ctx,px,yy,pw,uh,8*dpr); ctx.fill(); ctx.stroke();
      ctx.save(); roundRect(ctx,px+6*dpr,yy+6*dpr,uh*1.2,uh-12*dpr,5*dpr); ctx.clip(); ctx.translate(px+6*dpr,yy+6*dpr); drawPlan(ctx,uh*1.2,uh-12*dpr); ctx.restore();
      ctx.fillStyle='#171717'; ctx.font='600 '+f2+'px Inter, sans-serif'; ctx.fillText(u[0],px+uh*1.2+16*dpr,yy+uh*.45);
      ctx.fillStyle='#8A8A8A'; ctx.font='400 '+f2*.85+'px Inter, sans-serif'; ctx.fillText(u[1],px+uh*1.2+16*dpr,yy+uh*.45+f2*1.3);
    });
  }

  function drawSheet(ctx, W, H, st){
    ctx.fillStyle = '#F5F2EA'; ctx.fillRect(0,0,W,H);
    grid(ctx, W, H, 'rgba(60,52,40,.06)', 22*dpr);
    ctx.save(); ctx.globalAlpha = .9; drawWire(ctx, W, H, st, '#2E2A24'); ctx.restore();
    ctx.strokeStyle = 'rgba(46,42,36,.35)'; ctx.lineWidth = dpr; ctx.setLineDash([6*dpr,4*dpr]);
    ctx.beginPath(); ctx.moveTo(W*.04, H*.9); ctx.lineTo(W*.96, H*.9); ctx.stroke(); ctx.setLineDash([]);
    var fs = Math.max(8*dpr, W/70); ctx.fillStyle = 'rgba(46,42,36,.6)'; ctx.font = '500 ' + fs + 'px "Geist Mono", monospace';
    ctx.fillText('PROSPETTO · SCALA 1:200', W*.04, H*.95);
  }
  function drawPaperPlan(ctx, W, H){
    ctx.fillStyle = '#F5F2EA'; ctx.fillRect(0,0,W,H); grid(ctx, W, H, 'rgba(60,52,40,.06)', 12*dpr);
    var m = W*.1, x0 = m, y0 = H*.14, pw = W - 2*m, ph = H*.66, ink = '#2E2A24';
    [[0,0,.58,.62],[.58,0,.42,.55],[.58,.55,.42,.45],[0,.62,.3,.38],[.3,.62,.28,.38]].forEach(function(r){ ctx.strokeStyle = ink; ctx.lineWidth = Math.max(1,dpr*.8); ctx.strokeRect(x0+pw*r[0], y0+ph*r[1], pw*r[2], ph*r[3]); });
    ctx.lineWidth = 2.4*dpr; ctx.strokeRect(x0, y0, pw, ph);
  }
  window.__lpPaint = function(c, s){ paint(c, s); };
  function fit(canvas){ var r = canvas.getBoundingClientRect(); if (!r.width) return false; canvas.width = Math.round(r.width*dpr); canvas.height = Math.round(r.height*dpr); return true; }
  function paint(canvas, mode){
    if (!fit(canvas)) return;
    var ctx = canvas.getContext('2d'), W = canvas.width, H = canvas.height, base = mode.split('-')[0];
    var stD = H > W ? {x:W*.04, y:H*.3, w:W*.92, h:H*.42} : {x:W*.1, y:H*.22, w:W*.8, h:H*.56};
    if (base === 'draw') drawSheet(ctx, W, H, stD);
    else if (base === 'paperplan') drawPaperPlan(ctx, W, H);
    else if (base === 'clay'){ ctx.save(); ctx.filter = 'grayscale(1) brightness(1.18) contrast(.85)'; drawRender(ctx, W, H, 'day', stD); ctx.restore(); }
    else if (base === 'plan') drawPlan(ctx, W, H);
    else if (base === 'portal') drawPortal(ctx, W, H);
    else if (base === 'site') drawLanding(ctx, W, H);
    else drawRender(ctx, W, H, base, H > W ? {x:W*.04, y:H*.3, w:W*.92, h:H*.42} : {x:W*.1, y:H*.22, w:W*.8, h:H*.56});
  }
  /* wireframe-to-render scan (V1 hero), reusable on any canvas */
  function drawScan(canvas, t){
    var ctx = canvas.getContext('2d'), W = canvas.width, H = canvas.height; if (!W) return;
    var st = W > H * 1.2 ? {x:W*.28, y:H*.18, w:W*.46, h:H*.58} : {x:W*.06, y:H*.28, w:W*.88, h:H*.42};
    var reveal = reduce ? .6 : .56 + .32 * Math.sin(t/4200);
    var sx = st.x - st.w*.05 + st.w*1.2*reveal;
    drawRender(ctx, W, H, 'night', st);
    ctx.save(); ctx.beginPath(); ctx.rect(sx, 0, W - sx, H); ctx.clip();
    ctx.fillStyle = '#081210'; ctx.fillRect(sx, 0, W - sx, H);
    grid(ctx, W, H, 'rgba(127,211,160,.07)', 28*dpr);
    ctx.shadowColor = '#7FD3A0'; ctx.shadowBlur = 8*dpr;
    drawWire(ctx, W, H, st, 'rgba(191,239,210,.85)');
    ctx.restore();
    var sw = 90*dpr, top = st.y - st.h*.5, hgt = st.h*1.7;
    var g = ctx.createLinearGradient(sx - sw, 0, sx, 0); g.addColorStop(0,'rgba(127,211,160,0)'); g.addColorStop(1,'rgba(127,211,160,.2)');
    ctx.fillStyle = g; ctx.fillRect(sx - sw, top, sw, hgt);
    ctx.fillStyle = '#A8F0C4'; ctx.shadowColor = '#7FD3A0'; ctx.shadowBlur = 20*dpr; ctx.fillRect(sx - dpr, top, 2*dpr, hgt); ctx.shadowBlur = 0;
    ctx.fillStyle = 'rgba(168,240,196,.9)'; ctx.font = '500 ' + 10*dpr + 'px "Geist Mono", monospace';
    ctx.fillText('RENDER ' + Math.round(Math.min(1, Math.max(0, (sx - st.x)/(st.w*1.1)))*100) + '%', sx + 8*dpr, top + 12*dpr);
  }

  /* ================= Static canvases ================= */
  var statics = [].slice.call(document.querySelectorAll('canvas[data-scene]'));
  function paintStatics(){ statics.forEach(function(c){ paint(c, c.dataset.scene); }); }

  /* ================= Hero: Spott-style overview (Campagne e portali / Sito web / Render / Report) ================= */
  var frame = document.getElementById('frame-body'), hero = document.getElementById('hero-canvas');
  var tabs = [].slice.call(document.querySelectorAll('.hx_tabs [data-hero]')), tabWrap = document.querySelector('.hx_tabs');
  var heroMode = 'ads', TAB_MS = 7000, auto = !reduce, autoT = null, heroVisible = true;
  var HXL = {ads:['Campagne e portali','+ Nuova campagna'], site:['Sito web','Pubblica modifiche'], scan:['Render in-house','+ Nuovo render'], report:['Report','Esporta PDF']};
  if (!frame) frame = document.createElement('div');
  if (!tabWrap) tabWrap = document.createElement('div');
  var hxCrumb = frame.querySelector('[data-crumb]'), hxCta = frame.querySelector('[data-cta]'), hxNav = [].slice.call(frame.querySelectorAll('.hx_side [data-nav]'));
  function setHero(mode){
    heroMode = mode; frame.setAttribute('data-mode', mode);
    tabs.forEach(function(o){ var on = o.dataset.hero === mode; o.setAttribute('aria-selected', on ? 'true' : 'false'); var b = o.querySelector('.tab_bar'); if (b){ b.style.animation = 'none'; void b.offsetWidth; b.style.animation = ''; } });
    if (hxCrumb) hxCrumb.textContent = HXL[mode][0];
    if (hxCta) hxCta.textContent = HXL[mode][1];
    hxNav.forEach(function(li){ li.classList.toggle('is-on', li.dataset.nav === mode); });
    var pane = frame.querySelector('.hx_pane[data-pane="' + mode + '"]');
    if (pane) [].forEach.call(pane.querySelectorAll('canvas[data-scene]'), function(c){ paint(c, c.dataset.scene); });
    if (mode === 'scan' && hero) fit(hero);
  }
  function scheduleTab(){ clearTimeout(autoT); if (!auto) return; autoT = setTimeout(function(){ if (heroVisible){ var i = tabs.findIndex(function(t){ return t.dataset.hero === heroMode; }); setHero(tabs[(i+1) % tabs.length].dataset.hero); } scheduleTab(); }, TAB_MS); }
  var hxFeed = document.getElementById('hx-rl-feed');
  if (hxFeed && !reduce) setInterval(function(){ if (heroMode === 'report' && heroVisible && !document.hidden && hxFeed.children.length > 1) hxFeed.insertBefore(hxFeed.lastElementChild, hxFeed.firstElementChild); }, 2600);
  tabWrap.style.setProperty('--tab-dur', TAB_MS/1000 + 's');
  if (!auto) tabWrap.classList.add('is-manual');
  tabs.forEach(function(tb){ tb.addEventListener('click', function(){ auto = false; clearTimeout(autoT); tabWrap.classList.add('is-manual'); setHero(tb.dataset.hero); }); });

  /* ================= Render-card scan + animation loop ================= */
  var rdScan = document.querySelector('.rd_scan'), rdVisible = false;
  if ('IntersectionObserver' in window){
    new IntersectionObserver(function(e){ heroVisible = e[0].isIntersecting; }, {threshold:.1}).observe(frame);
    if (rdScan) new IntersectionObserver(function(e){ rdVisible = e[0].isIntersecting; if (rdVisible) fit(rdScan); }, {threshold:.05}).observe(rdScan);
  } else rdVisible = true;
  function loop(t){
    
    if (rdScan && rdVisible) drawScan(rdScan, t + 2000);
    requestAnimationFrame(loop);
  }

  /* ================= Close scene ================= */
  var closeC = document.getElementById('close-canvas');
  function paintClose(){ if (!closeC || !fit(closeC)) return; var W = closeC.width, H = closeC.height; drawRender(closeC.getContext('2d'), W, H, 'night', W > H ? {x:W*.18, y:H*.22, w:W*.64, h:H*.6} : {x:W*.04, y:H*.3, w:W*.92, h:H*.45}); }

  function paintAll(){ paintStatics(); setHero(heroMode); if (rdScan) fit(rdScan); paintClose(); setHeadH(); }
  var rt; window.addEventListener('resize', function(){ clearTimeout(rt); rt = setTimeout(paintAll, 120); });

  /* ================= Hero live feed (scan tab) ================= */
  var FEED = [
    ['META','','Nuovo lead · Reels','Trilocale con terrazzo, modulo compilato','ora'],
    ['GOOG','is-g','Visita prenotata · Search','Sabato 10:30, ufficio vendite','4 min'],
    ['PORT','is-p','Contatto · Immobiliare.it','Quadrilocale, richiesta planimetrie','9 min'],
    ['META','','Nuovo lead · Carousel','Bilocale, chiede prezzo','14 min'],
    ['GOOG','is-g','Chiamata · 3 min 40 s','Da ricerca “nuove costruzioni”','22 min']
  ];
  var cards = [].slice.call(document.querySelectorAll('#feed .notif')), fi = 0;
  function fill(el, it){ el.innerHTML = '<span class="notif_icon ' + it[1] + '">' + it[0] + '</span><div><strong>' + it[2] + '</strong><small>' + it[3] + '</small></div><time>' + it[4] + '</time>'; }
  if (!reduce && cards.length) setInterval(function(){
    cards.forEach(function(c){ c.classList.add('is-out'); });
    setTimeout(function(){ fi = (fi + 1) % FEED.length; fill(cards[0], FEED[fi]); fill(cards[1], FEED[(fi + 1) % FEED.length]); cards.forEach(function(c){ c.classList.remove('is-out'); }); }, 450);
  }, 3800);

  /* ================= Reveal: problem cards + how-it-works ================= */
  ['lo-grid','hw-grid'].forEach(function(id){
    var el = document.getElementById(id); if (!el) return;
    if (reduce || !('IntersectionObserver' in window)){ el.classList.add('is-in'); return; }
    new IntersectionObserver(function(e, o){ if (e[0].isIntersecting){ el.classList.add('is-in'); o.disconnect(); } }, {threshold:.2}).observe(el);
  });

  /* ---------- 360 network scroll story (v6: many small real icons per circle, Lapis hub) ---------- */
  (function(){
    var sec=document.querySelector('.net_section'), cv=document.getElementById('net-canvas'); if(!sec||!cv) return;
    var ctx=cv.getContext('2d'), copy=sec.querySelector('.net_copy'), words=[].slice.call(sec.querySelectorAll('.nw'));
    var W=0,H=0,DPR=1,p=0,pS=0,reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var SIP={"oai":["M9.205 8.658v-2.26c0-.19.072-.333.238-.428l4.543-2.616c.619-.357 1.356-.523 2.117-.523 2.854 0 4.662 2.212 4.662 4.566 0 .167 0 .357-.024.547l-4.71-2.759a.797.797 0 00-.856 0l-5.97 3.473zm10.609 8.8V12.06c0-.333-.143-.57-.429-.737l-5.97-3.473 1.95-1.118a.433.433 0 01.476 0l4.543 2.617c1.309.76 2.189 2.378 2.189 3.948 0 1.808-1.07 3.473-2.76 4.163zM7.802 12.703l-1.95-1.142c-.167-.095-.239-.238-.239-.428V5.899c0-2.545 1.95-4.472 4.591-4.472 1 0 1.927.333 2.712.928L8.23 5.067c-.285.166-.428.404-.428.737v6.898zM12 15.128l-2.795-1.57v-3.33L12 8.658l2.795 1.57v3.33L12 15.128zm1.796 7.23c-1 0-1.927-.332-2.712-.927l4.686-2.712c.285-.166.428-.404.428-.737v-6.898l1.974 1.142c.167.095.238.238.238.428v5.233c0 2.545-1.974 4.472-4.614 4.472zm-5.637-5.303l-4.544-2.617c-1.308-.761-2.188-2.378-2.188-3.948A4.482 4.482 0 014.21 6.327v5.423c0 .333.143.571.428.738l5.947 3.449-1.95 1.118a.432.432 0 01-.476 0zm-.262 3.9c-2.688 0-4.662-2.021-4.662-4.519 0-.19.024-.38.047-.57l4.686 2.71c.286.167.571.167.856 0l5.97-3.448v2.26c0 .19-.07.333-.237.428l-4.543 2.616c-.619.357-1.356.523-2.117.523zm5.899 2.83a5.947 5.947 0 005.827-4.756C22.287 18.339 24 15.84 24 13.296c0-1.665-.713-3.282-1.998-4.448.119-.5.19-.999.19-1.498 0-3.401-2.759-5.947-5.946-5.947-.642 0-1.26.095-1.88.31A5.962 5.962 0 0010.205 0a5.947 5.947 0 00-5.827 4.757C1.713 5.447 0 7.945 0 10.49c0 1.666.713 3.283 1.998 4.448-.119.5-.19 1-.19 1.499 0 3.401 2.759 5.946 5.946 5.946.642 0 1.26-.095 1.88-.309a5.96 5.96 0 004.162 1.713z","#000000"],"meta":["M6.915 4.03c-1.968 0-3.683 1.28-4.871 3.113C.704 9.208 0 11.883 0 14.449c0 .706.07 1.369.21 1.973a6.624 6.624 0 0 0 .265.86 5.297 5.297 0 0 0 .371.761c.696 1.159 1.818 1.927 3.593 1.927 1.497 0 2.633-.671 3.965-2.444.76-1.012 1.144-1.626 2.663-4.32l.756-1.339.186-.325c.061.1.121.196.183.3l2.152 3.595c.724 1.21 1.665 2.556 2.47 3.314 1.046.987 1.992 1.22 3.06 1.22 1.075 0 1.876-.355 2.455-.843a3.743 3.743 0 0 0 .81-.973c.542-.939.861-2.127.861-3.745 0-2.72-.681-5.357-2.084-7.45-1.282-1.912-2.957-2.93-4.716-2.93-1.047 0-2.088.467-3.053 1.308-.652.57-1.257 1.29-1.82 2.05-.69-.875-1.335-1.547-1.958-2.056-1.182-.966-2.315-1.303-3.454-1.303zm10.16 2.053c1.147 0 2.188.758 2.992 1.999 1.132 1.748 1.647 4.195 1.647 6.4 0 1.548-.368 2.9-1.839 2.9-.58 0-1.027-.23-1.664-1.004-.496-.601-1.343-1.878-2.832-4.358l-.617-1.028a44.908 44.908 0 0 0-1.255-1.98c.07-.109.141-.224.211-.327 1.12-1.667 2.118-2.602 3.358-2.602zm-10.201.553c1.265 0 2.058.791 2.675 1.446.307.327.737.871 1.234 1.579l-1.02 1.566c-.757 1.163-1.882 3.017-2.837 4.338-1.191 1.649-1.81 1.817-2.486 1.817-.524 0-1.038-.237-1.383-.794-.263-.426-.464-1.13-.464-2.046 0-2.221.63-4.535 1.66-6.088.454-.687.964-1.226 1.533-1.533a2.264 2.264 0 0 1 1.088-.285z","#0467DF"],"ig":["M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077","#FF0069"],"fb":["M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z","#0866FF"],"yt":["M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z","#FF0000"],"tiktok":["M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z","#000000"],"wa":["M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z","#25D366"],"calendly":["M19.655 14.262c.281 0 .557.023.828.064 0 .005-.005.01-.005.014-.105.267-.234.534-.381.786l-1.219 2.106c-1.112 1.936-3.177 3.127-5.411 3.127h-2.432c-2.23 0-4.294-1.191-5.412-3.127l-1.218-2.106a6.251 6.251 0 0 1 0-6.252l1.218-2.106C6.736 4.832 8.8 3.641 11.035 3.641h2.432c2.23 0 4.294 1.191 5.411 3.127l1.219 2.106c.147.252.271.519.381.786 0 .004.005.009.005.014-.267.041-.543.064-.828.064-1.816 0-2.501-.607-3.291-1.306-.764-.676-1.711-1.517-3.44-1.517h-1.029c-1.251 0-2.387.455-3.2 1.278-.796.805-1.233 1.904-1.233 3.099v1.411c0 1.196.437 2.295 1.233 3.099.813.823 1.949 1.278 3.2 1.278h1.034c1.729 0 2.676-.841 3.439-1.517.791-.703 1.471-1.306 3.287-1.301Zm.005-3.237c.399 0 .794-.036 1.179-.11-.002-.004-.002-.01-.002-.014-.073-.414-.193-.823-.349-1.218.731-.12 1.407-.396 1.986-.819 0-.004-.005-.013-.005-.018-.331-1.085-.832-2.101-1.489-3.03-.649-.915-1.435-1.719-2.331-2.395-1.867-1.398-4.088-2.138-6.428-2.138-1.448 0-2.855.28-4.175.841-1.273.543-2.423 1.315-3.407 2.299S2.878 6.552 2.341 7.83c-.557 1.324-.842 2.726-.842 4.175 0 1.448.281 2.855.842 4.174.542 1.274 1.314 2.423 2.298 3.407s2.129 1.761 3.407 2.299c1.324.556 2.727.841 4.175.841 2.34 0 4.561-.74 6.428-2.137a10.815 10.815 0 0 0 2.331-2.396c.652-.929 1.158-1.949 1.489-3.03 0-.004.005-.014.005-.018-.579-.423-1.255-.699-1.986-.819.161-.395.276-.804.349-1.218.005-.009.005-.014.005-.023.869.166 1.692.506 2.404 1.035.685.505.552 1.075.446 1.416C22.184 20.437 17.619 24 12.221 24c-6.625 0-12-5.375-12-12s5.37-12 12-12c5.398 0 9.963 3.563 11.471 8.464.106.341.239.915-.446 1.421-.717.529-1.535.873-2.404 1.034.128.716.128 1.45 0 2.166-.387-.074-.782-.11-1.182-.11-4.184 0-3.968 2.823-6.736 2.823h-1.029c-1.899 0-3.15-1.357-3.15-3.095v-1.411c0-1.738 1.251-3.094 3.15-3.094h1.034c2.768 0 2.552 2.823 6.731 2.827Z","#006BFF"],"gtm":["M12.003 0a3 3 0 0 0-2.121 5.121l6.865 6.865-4.446 4.541 1.745 1.836a3.432 3.432 0 0 1 .7.739l.012.011-.001.002a3.432 3.432 0 0 1 .609 1.953 3.432 3.432 0 0 1-.09.78l7.75-7.647c.031-.029.067-.05.098-.08.023-.023.038-.052.06-.076a2.994 2.994 0 0 0-.06-4.166l-9-9A2.99 2.99 0 0 0 12.003 0zM8.63 2.133L.88 9.809a2.998 2.998 0 0 0 0 4.238l7.7 7.75a3.432 3.432 0 0 1-.077-.729 3.432 3.432 0 0 1 3.431-3.431 3.432 3.432 0 0 1 .826.101l-5.523-5.81 4.371-4.373-2.08-2.08c-.903-.904-1.193-2.183-.898-3.342zm3.304 16.004a2.932 2.932 0 0 0-2.931 2.931A2.932 2.932 0 0 0 11.934 24a2.932 2.932 0 0 0 2.932-2.932 2.932 2.932 0 0 0-2.932-2.931z","#246FDB"],"hubspot":["M18.164 7.93V5.084a2.198 2.198 0 001.267-1.978v-.067A2.2 2.2 0 0017.238.845h-.067a2.2 2.2 0 00-2.193 2.193v.067a2.196 2.196 0 001.252 1.973l.013.006v2.852a6.22 6.22 0 00-2.969 1.31l.012-.01-7.828-6.095A2.497 2.497 0 104.3 4.656l-.012.006 7.697 5.991a6.176 6.176 0 00-1.038 3.446c0 1.343.425 2.588 1.147 3.607l-.013-.02-2.342 2.343a1.968 1.968 0 00-.58-.095h-.002a2.033 2.033 0 102.033 2.033 1.978 1.978 0 00-.1-.595l.005.014 2.317-2.317a6.247 6.247 0 104.782-11.134l-.036-.005zm-.964 9.378a3.206 3.206 0 113.215-3.207v.002a3.206 3.206 0 01-3.207 3.207z","#FF7A59"],"zoho":["M8.66 6.897a1.299 1.299 0 0 0-1.205.765l-.642 1.44-.062-.385A1.291 1.291 0 0 0 5.27 7.648l-4.185.678A1.291 1.291 0 0 0 .016 9.807l.678 4.18a1.293 1.293 0 0 0 1.27 1.087c.074 0 .143-.01.216-.017l4.18-.678c.436-.07.784-.351.96-.723l2.933 1.307a1.304 1.304 0 0 0 .988.026c.321-.12.575-.365.716-.678l.28-.629.038.276a1.297 1.297 0 0 0 1.455 1.103l3.712-.501a1.29 1.29 0 0 0 1.03.514h4.236c.713 0 1.29-.58 1.291-1.291V9.545c0-.712-.58-1.291-1.291-1.291h-4.236c-.079 0-.155.008-.23.022a1.309 1.309 0 0 0-.275-.288c-.275-.21-.614-.3-.958-.253l-4.197.571c-.155.021-.3.07-.432.14L9.159 7.01a1.27 1.27 0 0 0-.499-.113zm-.025.705c.077 0 .159.013.24.052l2.971 1.324c-.128.238-.18.508-.142.782l.357 2.596h.002l-.745 1.672a.59.59 0 0 1-.777.296l-3.107-1.385-.004-.041-.41-2.526L8.1 7.95a.589.589 0 0 1 .536-.348zm-3.159.733c.125 0 .245.039.343.112.13.09.21.227.237.382l.234 1.446-.56 1.259a1.27 1.27 0 0 0-.026.987c.12.322.364.575.678.717l.295.131a.585.585 0 0 1-.428.314l-4.185.678a.59.59 0 0 1-.674-.485l-.678-4.18a.588.588 0 0 1 .485-.674l4.185-.678c.03-.004.064-.01.094-.01zm11.705.09a.59.59 0 0 1 .415.173 1.287 1.287 0 0 0-.416.947v4.237c0 .033.003.065.005.097l-3.55.482a.586.586 0 0 1-.66-.502l-.191-1.403.899-2.017a1.29 1.29 0 0 0-.333-1.5l3.754-.51c.026-.004.051-.004.077-.004zm1.3.532h4.227c.326 0 .588.266.588.588v4.237a.589.589 0 0 1-.588.588h-4.237a.564.564 0 0 1-.12-.013c.47-.246.758-.765.684-1.318zm-5.988.309.254.113c.296.133.43.48.296.777l-.432.97-.207-1.465a.58.58 0 0 1 .09-.395zm5.39.538.453 3.325a.583.583 0 0 1-.453.65zM6.496 11.545l.17 1.052a.588.588 0 0 1-.293-.776zm3.985 4.344a.588.588 0 0 0-.612.603c0 .358.244.61.601.61a.582.582 0 0 0 .607-.608c0-.35-.242-.605-.596-.605zm5.545 0a.588.588 0 0 0-.612.603c0 .358.245.61.602.61a.582.582 0 0 0 .606-.608c0-.35-.24-.605-.596-.605zm-8.537.018a.047.047 0 0 0-.048.047v.085c0 .026.021.047.048.047h.52l-.623.9a.052.052 0 0 0-.009.027v.027c0 .026.021.047.048.047h.815a.047.047 0 0 0 .047-.047v-.085a.047.047 0 0 0-.047-.047h-.55l.606-.9a.05.05 0 0 0 .008-.026v-.028a.047.047 0 0 0-.047-.047zm5.303 0a.047.047 0 0 0-.047.047v1.086c0 .026.02.047.047.047h.135a.047.047 0 0 0 .047-.047v-.454h.545v.454c0 .026.02.047.047.047h.134a.047.047 0 0 0 .047-.047v-1.086a.047.047 0 0 0-.047-.047h-.134a.047.047 0 0 0-.047.047v.453h-.545v-.453a.047.047 0 0 0-.047-.047zm-2.324.164c.25 0 .372.194.372.425 0 .219-.109.425-.358.426-.242 0-.375-.197-.375-.419 0-.235.108-.432.36-.432zm5.545 0c.25 0 .372.194.372.425 0 .219-.108.425-.358.426-.242 0-.374-.197-.374-.419 0-.235.108-.432.36-.432z","#E42527"],"odoo":["M21.1002 15.7957c-1.6015 0-2.8997-1.2983-2.8997-2.8998s1.2983-2.8997 2.8997-2.8997c1.6015 0 2.8998 1.2982 2.8998 2.8997 0 1.5999-1.2979 2.8998-2.8998 2.8998zm0-1.2c.9388.0006 1.7003-.7601 1.7008-1.6989.0004-.9388-.7602-1.7003-1.699-1.7007h-.0018c-.9388.0004-1.6994.7619-1.699 1.7007.0005.9381.761 1.6985 1.699 1.699zm-6.0655 1.2c-1.6014 0-2.8997-1.2983-2.8997-2.8998s1.2983-2.8997 2.8997-2.8997c1.6015 0 2.8998 1.2982 2.8998 2.8997 0 1.5999-1.2999 2.8998-2.8998 2.8998zm0-1.2c.9389.0006 1.7003-.7601 1.7008-1.6989.0005-.9388-.7602-1.7003-1.699-1.7007h-.0018c-.9388.0004-1.6994.7619-1.699 1.7007.0005.9381.761 1.6985 1.699 1.699zM11.865 12.858c0 1.6199-1.2979 2.9378-2.8977 2.9378s-2.8998-1.314-2.8998-2.9358 1.1799-2.8597 2.8998-2.8597c.6359 0 1.2239.134 1.6998.484v-1.68a.6.6 0 0 1 1.2 0v4.0537h-.002zm-2.8977 1.7399c.9388.0005 1.7002-.7602 1.7007-1.699.0005-.9388-.7602-1.7003-1.699-1.7007h-.0017c-.9389.0004-1.6995.7619-1.699 1.7007.0004.9381.7608 1.6985 1.699 1.699zm-6.0675 1.1979C1.2983 15.7957 0 14.4974 0 12.8959s1.2983-2.8997 2.8998-2.8997 2.8997 1.2982 2.8997 2.8997c0 1.5999-1.2999 2.8998-2.8997 2.8998zm0-1.2c.9388.0006 1.7002-.7601 1.7007-1.699.0005-.9387-.7602-1.7002-1.699-1.7006h-.0017c-.9388.0004-1.6995.7619-1.699 1.7007.0004.9381.7608 1.6985 1.699 1.699z","#714B67"],"ga4":["M22.84 2.9982v17.9987c.0086 1.6473-1.3197 2.9897-2.967 2.9984a2.9808 2.9808 0 01-.3677-.0208c-1.528-.226-2.6477-1.5558-2.6105-3.1V3.1204c-.0369-1.5458 1.0856-2.8762 2.6157-3.1 1.6361-.1915 3.1178.9796 3.3093 2.6158.014.1201.0208.241.0202.3619zM4.1326 18.0548c-1.6417 0-2.9726 1.331-2.9726 2.9726C1.16 22.6691 2.4909 24 4.1326 24s2.9726-1.3309 2.9726-2.9726-1.331-2.9726-2.9726-2.9726zm7.8728-9.0098c-.0171 0-.0342 0-.0513.0003-1.6495.0904-2.9293 1.474-2.891 3.1256v7.9846c0 2.167.9535 3.4825 2.3505 3.763 1.6118.3266 3.1832-.7152 3.5098-2.327.04-.1974.06-.3983.0593-.5998v-8.9585c.003-1.6474-1.33-2.9852-2.9773-2.9882z","#E37400"]};
    var P2={};for(var k in SIP)P2[k]=new Path2D(SIP[k][0]);
    function img(key){var i=new Image();i.src=LOGO[key];return i;}
    var IM={immo:img('immoIcon'),idea:img('ideaIcon'),casa:img('casaIcon'),gads:img('gads')};
    var CIR=[['Campagne','#3D8BFF'],['Sito web','#F2EFEA'],['Portali','#F2D42E'],['Creatività','#F08A4B'],['Dati e CRM','#34A853']];
    var SET=[['meta','gads','oai','ig','fb','yt'],['wa','web','mail'],['immo','idea','casa'],['post','fbpost','story','reel'],['ga4','gtm','hubspot','zoho','odoo']];
    var CIRT={},U=[];SET.forEach(function(s,c){s.forEach(function(t){CIRT[t]=c;U.push(t);});});
    function rnd(a,b){return a+Math.random()*(b-a);}
    var nodes=[],dots=[],links=[];
    function build(){nodes=[];dots=[];links=[];
      var n=W<700?40:76;
      for(var i=0;i<n;i++){var t=U[i%U.length],z=rnd(.35,1);nodes.push({t:t,x:rnd(.02,.98),y:rnd(.03,.97),z:z,vx:rnd(-.004,.004),vy:rnd(-.003,.003),c:CIRT[t],main:i<U.length});}
      for(var i=0;i<(W<700?80:190);i++)dots.push({x:rnd(0,1),y:rnd(0,1),z:rnd(.2,1),vx:rnd(-.003,.003),vy:rnd(-.003,.003),c:i%5});
      var all=nodes.concat(dots);
      all.forEach(function(a,i){var best=[];all.forEach(function(b,j){if(i===j)return;var d=(a.x-b.x)*(a.x-b.x)*1.6+(a.y-b.y)*(a.y-b.y);best.push([d,j]);});best.sort(function(u,v){return u[0]-v[0];});for(var k=0;k<3;k++)if(i<best[k][1])links.push([i,best[k][1]]);});
      /* slots: main icons sit in their circle's outer lobe; fillers ride along and fade */
      nodes.forEach(function(o){var s=SET[o.c],k=s.indexOf(o.t),tot=s.length,out=(-90+o.c*72)*Math.PI/180,nO=tot>3?Math.ceil(tot/2):tot,row=k<nO?0:1,j=row?k-nO:k,m=row?tot-nO:nO,u=m>1?j/(m-1):.5,spread=row?(m>2?.95:.7):(m>2?1.25:1);
        o.ang=out+(u-.5)*spread;o.rf=tot>3?(row?.5:.82):.72;});
      var cnt=[0,0,0,0,0],tot=[0,0,0,0,0];dots.forEach(function(o){tot[o.c]++;});dots.forEach(function(o){var k=cnt[o.c]++;o.ang=(k+.5)/tot[o.c]*Math.PI*2+o.c*.7;o.rf=1;});
    }
    function resize(){var r=cv.getBoundingClientRect();DPR=Math.min(2,window.devicePixelRatio||1);W=r.width;H=r.height;cv.width=W*DPR;cv.height=H*DPR;ctx.setTransform(DPR,0,0,DPR,0,0);build();}
    function sm(x){x=Math.min(1,Math.max(0,x));return x*x*(3-2*x);}
    function venn(c){var R=W<700?Math.min(W*.24,H*.2):Math.min(W*.2,H*.23),d=R*.62,a=(-90+c*72)*Math.PI/180;return {x:W/2+Math.cos(a)*d,y:H/2+Math.sin(a)*d+H*.02,r:R};}
    function rr(x,y,w,h,r){ctx.beginPath();ctx.moveTo(x+r,y);ctx.arcTo(x+w,y,x+w,y+h,r);ctx.arcTo(x+w,y+h,x,y+h,r);ctx.arcTo(x,y+h,x,y,r);ctx.arcTo(x,y,x+w,y,r);ctx.closePath();}
    function icon(t,x,y,s,al){if(al<.01)return;ctx.save();ctx.globalAlpha=al;var hs=s/2;
      if(t==='oai'){var g=s*.92;ctx.translate(x-g/2,y-g/2);ctx.scale(g/24,g/24);ctx.fillStyle='#fff';ctx.fill(P2[t],'evenodd');ctx.restore();return;}
      if(t==='fb'){ctx.fillStyle='#fff';ctx.beginPath();ctx.arc(x,y,hs*.94,0,7);ctx.fill();var gf=s;ctx.translate(x-gf/2,y-gf/2);ctx.scale(gf/24,gf/24);ctx.fillStyle='#0866FF';ctx.fill(P2.fb);ctx.restore();return;}
      if(t==='ig'){var gi=ctx.createLinearGradient(x-hs,y+hs,x+hs,y-hs);gi.addColorStop(0,'#FEC053');gi.addColorStop(.45,'#F2203E');gi.addColorStop(1,'#5258CF');rr(x-hs,y-hs,s,s,s*.28);ctx.fillStyle=gi;ctx.fill();ctx.strokeStyle='#fff';ctx.lineWidth=Math.max(1.4,s*.08);rr(x-s*.29,y-s*.29,s*.58,s*.58,s*.17);ctx.stroke();ctx.beginPath();ctx.arc(x,y,s*.13,0,7);ctx.stroke();ctx.fillStyle='#fff';ctx.beginPath();ctx.arc(x+s*.16,y-s*.16,s*.035,0,7);ctx.fill();ctx.restore();return;}
      if(t==='wa'){rr(x-hs,y-hs,s,s,s*.26);ctx.fillStyle='#25D366';ctx.fill();var gw=s*.62;ctx.translate(x-gw/2,y-gw/2);ctx.scale(gw/24,gw/24);ctx.fillStyle='#fff';ctx.fill(P2.wa);ctx.restore();return;}
      if(P2[t]){rr(x-hs,y-hs,s,s,s*.26);ctx.fillStyle='#fff';ctx.fill();var g=s*.6;ctx.translate(x-g/2,y-g/2);ctx.scale(g/24,g/24);ctx.fillStyle=SIP[t][1];ctx.fill(P2[t]);ctx.restore();return;}
      if(t==='post'){var cw=s*.86,ch=s*1.04,x0=x-cw/2,y0=y-ch/2,g0;rr(x0,y0,cw,ch,s*.13);ctx.fillStyle='#fff';ctx.fill();
        g0=ctx.createLinearGradient(x0,y0,x0+cw,y0+cw);g0.addColorStop(0,'#FEC053');g0.addColorStop(.5,'#F2203E');g0.addColorStop(1,'#5258CF');ctx.fillStyle=g0;ctx.beginPath();ctx.arc(x0+s*.15,y0+s*.14,s*.07,0,7);ctx.fill();
        ctx.fillStyle='#E3E1DE';rr(x0+s*.27,y0+s*.115,s*.34,s*.05,s*.025);ctx.fill();
        var ix=x0+s*.06,iy=y0+s*.26,iw=cw-s*.12,ih=s*.52,g1=ctx.createLinearGradient(0,iy,0,iy+ih);g1.addColorStop(0,'#2A3150');g1.addColorStop(1,'#E7A072');ctx.fillStyle=g1;rr(ix,iy,iw,ih,s*.05);ctx.fill();
        ctx.fillStyle='rgba(255,236,210,.92)';ctx.fillRect(ix+iw*.18,iy+ih*.38,iw*.26,ih*.62);ctx.fillRect(ix+iw*.52,iy+ih*.58,iw*.26,ih*.42);
        ctx.fillStyle='#D9D6D2';[0,1,2].forEach(function(k){ctx.beginPath();ctx.arc(x0+s*.16+k*s*.13,y0+ch-s*.12,s*.04,0,7);ctx.fill();});ctx.restore();return;}
      if(t==='fbpost'){var fw=s*1.02,fh=s*.98,fx=x-fw/2,fy=y-fh/2;rr(fx,fy,fw,fh,s*.12);ctx.fillStyle='#fff';ctx.fill();
        ctx.fillStyle='#0866FF';ctx.beginPath();ctx.arc(fx+s*.14,fy+s*.14,s*.07,0,7);ctx.fill();ctx.fillStyle='#E3E1DE';rr(fx+s*.26,fy+s*.1,s*.4,s*.05,s*.025);ctx.fill();rr(fx+s*.26,fy+s*.17,s*.24,s*.035,s*.02);ctx.fill();
        var bx=fx,by=fy+s*.28,bw=fw,bh=s*.46,g3=ctx.createLinearGradient(0,by,0,by+bh);g3.addColorStop(0,'#8FB8D2');g3.addColorStop(1,'#E6EEF0');ctx.fillStyle=g3;ctx.fillRect(bx,by,bw,bh);
        ctx.fillStyle='#F4F1EB';ctx.fillRect(bx+bw*.2,by+bh*.3,bw*.34,bh*.7);ctx.fillStyle='#BCB6AC';ctx.fillRect(bx+bw*.54,by+bh*.3,bw*.12,bh*.7);ctx.fillStyle='#4F6F86';for(var r=0;r<3;r++)ctx.fillRect(bx+bw*.25,by+bh*(.4+r*.19),bw*.24,bh*.07);
        ctx.fillStyle='#0866FF';rr(fx+s*.08,fy+fh-s*.15,s*.22,s*.07,s*.035);ctx.fill();ctx.fillStyle='#E3E1DE';rr(fx+s*.38,fy+fh-s*.15,s*.22,s*.07,s*.035);ctx.fill();rr(fx+s*.68,fy+fh-s*.15,s*.22,s*.07,s*.035);ctx.fill();ctx.restore();return;}
      if(t==='story'){var sw=s*.62,sh=s*1.08,sx=x-sw/2,sy=y-sh/2,g4=ctx.createLinearGradient(0,sy,0,sy+sh);g4.addColorStop(0,'#E7A072');g4.addColorStop(.55,'#B0573A');g4.addColorStop(1,'#1D2542');rr(sx,sy,sw,sh,s*.11);ctx.fillStyle=g4;ctx.fill();
        ctx.fillStyle='rgba(255,255,255,.95)';rr(sx+s*.05,sy+s*.05,sw*.42,s*.025,s*.012);ctx.fill();ctx.fillStyle='rgba(255,255,255,.45)';rr(sx+s*.05+sw*.46,sy+s*.05,sw*.38,s*.025,s*.012);ctx.fill();
        var g5=ctx.createLinearGradient(sx,sy,sx+s*.2,sy+s*.2);g5.addColorStop(0,'#FEC053');g5.addColorStop(1,'#F2203E');ctx.strokeStyle=g5;ctx.lineWidth=Math.max(1,s*.03);ctx.beginPath();ctx.arc(sx+s*.13,sy+s*.17,s*.055,0,7);ctx.stroke();
        ctx.fillStyle='rgba(255,236,210,.9)';ctx.fillRect(x-sw*.22,y-sh*.02,sw*.24,sh*.3);ctx.fillRect(x+sw*.06,y+sh*.08,sw*.2,sh*.2);
        ctx.strokeStyle='rgba(255,255,255,.75)';ctx.lineWidth=Math.max(1,s*.025);rr(sx+s*.05,sy+sh-s*.15,sw-s*.1,s*.09,s*.045);ctx.stroke();ctx.restore();return;}
      if(t==='reel'){var rw=s*.62,rh=s*1.04,rx=x-rw/2,ry=y-rh/2,g2=ctx.createLinearGradient(0,ry,0,ry+rh);g2.addColorStop(0,'#1D2542');g2.addColorStop(1,'#E7A072');rr(rx,ry,rw,rh,s*.12);ctx.fillStyle=g2;ctx.fill();
        ctx.fillStyle='#fff';ctx.beginPath();ctx.moveTo(x-s*.09,y-s*.13);ctx.lineTo(x+s*.13,y);ctx.lineTo(x-s*.09,y+s*.13);ctx.closePath();ctx.fill();ctx.restore();return;}
      if(IM[t]&&IM[t].complete&&IM[t].naturalWidth){rr(x-hs,y-hs,s,s,s*.24);ctx.clip();ctx.drawImage(IM[t],x-hs,y-hs,s,s);ctx.restore();return;}
      ctx.lineWidth=Math.max(1.2,s*.08);ctx.lineCap='round';ctx.lineJoin='round';ctx.strokeStyle='rgba(255,255,255,.9)';
      if(t==='web'){rr(x-hs,y-s*.38,s,s*.76,s*.12);ctx.stroke();ctx.beginPath();ctx.moveTo(x-hs,y-s*.16);ctx.lineTo(x+hs,y-s*.16);ctx.stroke();ctx.fillStyle='rgba(255,255,255,.9)';[0,1,2].forEach(function(k){ctx.beginPath();ctx.arc(x-hs+s*.12+k*s*.1,y-s*.27,s*.025,0,7);ctx.fill();});}
      else if(t==='mail'){rr(x-hs,y-s*.34,s,s*.68,s*.1);ctx.stroke();ctx.beginPath();ctx.moveTo(x-hs,y-s*.3);ctx.lineTo(x,y+s*.05);ctx.lineTo(x+hs,y-s*.3);ctx.stroke();}
      ctx.restore();}
    function slot(o){var c=venn(o.c);return [c.x+Math.cos(o.ang)*c.r*o.rf,c.y+Math.sin(o.ang)*c.r*o.rf];}
    function pos(o,v){var sx=o.x*W,sy=o.y*H;if(v<=0)return [sx,sy];var T=slot(o),e=sm(v);return [sx+(T[0]-sx)*e,sy+(T[1]-sy)*e];}
    function label(i){var v=venn(i),a=(-90+i*72)*Math.PI/180,d=v.r*.62+v.r+(W<700?14:22),x=W/2+Math.cos(a)*d,y=H/2+H*.02+Math.sin(a)*d+(Math.sin(a)>.3?10:Math.sin(a)<-.3?-2:4);var mx=W<700?44:70;return [Math.max(mx,Math.min(W-mx,x)),Math.max(16,Math.min(H-10,y))];}
    function hub(al){var cx=W/2,cy=H/2+H*.02,R=venn(0).r,mw=Math.max(R*.42,W<700?46:0),k=mw/26;
      ctx.save();ctx.globalAlpha=al;var gl=ctx.createRadialGradient(cx,cy,0,cx,cy,R*.5);gl.addColorStop(0,'rgba(0,0,0,.92)');gl.addColorStop(.7,'rgba(0,0,0,.6)');gl.addColorStop(1,'rgba(0,0,0,0)');ctx.fillStyle=gl;ctx.beginPath();ctx.arc(cx,cy,R*.5,0,7);ctx.fill();var pulse=.85+.15*Math.sin(performance.now()/900),go=ctx.createRadialGradient(cx,cy,0,cx,cy,R*.62);go.addColorStop(0,'rgba(224,150,110,'+(.7*pulse)+')');go.addColorStop(.45,'rgba(176,87,58,'+(.36*pulse)+')');go.addColorStop(1,'rgba(176,87,58,0)');ctx.fillStyle=go;ctx.beginPath();ctx.arc(cx,cy,R*.62,0,7);ctx.fill();
      var oy=cy-mw*.62;ctx.save();ctx.translate(cx-13*k,oy);ctx.scale(k,k);ctx.strokeStyle='#F2EFEA';ctx.lineWidth=.55;
      [[1.45,14.85],[13.55,14.85],[7.5,8.25]].forEach(function(q){rr(q[0],q[1],11,5.5,.6);ctx.stroke();});rr(13.55,1.65,11,5.5,.6);ctx.globalAlpha=al*.9;ctx.fillStyle='#B0573A';ctx.fill();ctx.restore();
      ctx.textAlign='center';ctx.fillStyle='#fff';ctx.font='650 '+Math.round(mw*.36)+'px "Inter Tight", Inter, system-ui, sans-serif';ctx.fillText('Lapis',cx,oy+22*k+mw*.42);ctx.restore();}
    function onScroll(){var r=sec.getBoundingClientRect(),vh=window.innerHeight;var lead=0;p=Math.min(1,Math.max(0,(lead-r.top)/Math.max(1,r.height-vh+lead)));}
    window.addEventListener('scroll',onScroll,{passive:true});window.addEventListener('resize',function(){resize();onScroll();});
    var last=performance.now();
    function frame(now){var dt=Math.min(.05,(now-last)/1000);last=now;
      pS+=(p-pS)*Math.min(1,dt*6);
      var rev=sm((pS-.03)/.36), conv=sm((pS-.48)/.36), lab=sm((pS-.78)/.16);
      words.forEach(function(w,i){var t=sm(rev*(words.length+2)-i);w.style.setProperty('--b',1-t);});
      copy.style.setProperty('--ey',1-conv);copy.style.setProperty('--sb',sm((pS-.3)/.14)*(1-conv));
      copy.style.opacity=1-sm((pS-.5)/.18);
      ctx.clearRect(0,0,W,H);
      var all=nodes.concat(dots), drift=reduce?0:1, net=1-conv*.9;
      all.forEach(function(o){if(conv<.98){o.x+=o.vx*dt*drift*o.z;o.y+=o.vy*dt*drift*o.z;if(o.x<-.02||o.x>1.02)o.vx*=-1;if(o.y<-.02||o.y>1.02)o.vy*=-1;}o.P=pos(o,conv);});
      ctx.lineWidth=1;
      links.forEach(function(l){var a=all[l[0]],b=all[l[1]];var al=.14*net*Math.min(a.z,b.z);if(al<.005)return;ctx.strokeStyle='rgba(255,255,255,'+al+')';ctx.beginPath();ctx.moveTo(a.P[0],a.P[1]);ctx.lineTo(b.P[0],b.P[1]);ctx.stroke();});
      if(conv>.02){CIR.forEach(function(c,i){var v=venn(i);ctx.strokeStyle='rgba(255,255,255,'+(.22*conv)+')';ctx.lineWidth=1;ctx.beginPath();ctx.arc(v.x,v.y,v.r,0,7);ctx.stroke();ctx.fillStyle='rgba(255,255,255,'+(.018*conv)+')';ctx.fill();});
        /* spokes: every tool wired to the hub */
        var hx=W/2,hy=H/2+H*.02,r0=venn(0).r*.42;ctx.lineWidth=.6;nodes.forEach(function(o){if(!o.main)return;var dx=o.P[0]-hx,dy=o.P[1]-hy,dl=Math.hypot(dx,dy)||1;ctx.strokeStyle='rgba(255,255,255,'+(.1*lab)+')';ctx.beginPath();ctx.moveTo(hx+dx/dl*r0,hy+dy/dl*r0);ctx.lineTo(o.P[0],o.P[1]);ctx.stroke();});}
      dots.forEach(function(o){ctx.fillStyle='rgba(255,255,255,'+(.25+.45*o.z)*(1-.4*conv)+')';ctx.beginPath();ctx.arc(o.P[0],o.P[1],1+o.z*.9,0,7);ctx.fill();});
      var cop=+copy.style.opacity||0, CS=W<700?18:32, fadeF=1-sm(conv*1.8);
      nodes.forEach(function(o){var e=sm(conv),base=12+o.z*16,s=o.main?base+(CS-base)*e:base*(1-.25*conv),dx=(o.P[0]-W/2)/(W*.34),dy=(o.P[1]-H/2)/(H*.26),inC=dx*dx+dy*dy<1?1:0,al=(.35+.65*o.z)*(1-.72*inC*cop);
        if(o.main)al=al+(1-al)*e;else al*=fadeF;icon(o.t,o.P[0],o.P[1],o.main&&o.c===3?s*(1+.25*e):s,al);});
      if(lab>.02){hub(lab);ctx.textAlign='center';CIR.forEach(function(c,i){var A=label(i);ctx.font='600 '+(W<700?12.5:16.5)+'px Inter, system-ui, sans-serif';ctx.lineWidth=5;ctx.strokeStyle='rgba(0,0,0,'+(.85*lab)+')';ctx.strokeText(c[0],A[0],A[1]);ctx.fillStyle='rgba(255,255,255,'+lab+')';ctx.fillText(c[0],A[0],A[1]);});}
      requestAnimationFrame(frame);}
    resize();onScroll();requestAnimationFrame(frame);
  })();

  /* ================= Channel stack: sticky head height ================= */
  var chHead = document.getElementById('ch-head');
  function setHeadH(){ if (chHead) document.documentElement.style.setProperty('--head-h', chHead.offsetHeight + 'px'); }

  /* ================= Case cards ================= */
  (function(){
    var tr = document.getElementById('cs-track'); if (!tr) return;
    var cards = tr.querySelectorAll('.cs_card'), btns = document.querySelectorAll('#risultati .cs_arrow');
    function idx(){ var x = tr.scrollLeft, best = 0, d = 1e9; cards.forEach(function(c, i){ var dd = Math.abs(c.offsetLeft - cards[0].offsetLeft - x); if (dd < d){ d = dd; best = i; } }); return best; }
    function go(i){ i = Math.max(0, Math.min(cards.length - 1, i)); tr.scrollTo({left: cards[i].offsetLeft - cards[0].offsetLeft, behavior:'smooth'}); }
    function upd(){ if (btns.length < 2) return; var i = idx(); btns[0].classList.toggle('is-disabled', i === 0); btns[1].classList.toggle('is-disabled', i === cards.length - 1); }
    btns.forEach(function(b){ b.addEventListener('click', function(){ if (b.classList.contains('is-disabled')) return; go(idx() + (+b.dataset.dir)); }); });
    tr.addEventListener('scroll', function(){ clearTimeout(tr._s); tr._s = setTimeout(upd, 80); }, {passive:true});
    upd();
  })();

  /* ================= Report panels ================= */
  (function(){
    var tr = document.getElementById('rp-track'); if (!tr) return;
    var fr = tr.parentNode, ps = tr.querySelectorAll('.rp_panel'), bs = document.querySelectorAll('.rp_arrow');
    function idx(){ var x = tr.scrollLeft, b = 0, d = 1e9; ps.forEach(function(p, i){ var dd = Math.abs(p.offsetLeft - ps[0].offsetLeft - x); if (dd < d){ d = dd; b = i; } }); return b; }
    function go(i){ i = Math.max(0, Math.min(ps.length - 1, i)); if (i > idx() && tr.scrollLeft >= tr.scrollWidth - tr.clientWidth - 4) return; tr.scrollTo({left: ps[i].offsetLeft - ps[0].offsetLeft, behavior:'smooth'}); }
    function upd(){ if (bs.length < 2) return; var i = idx(); bs[0].classList.toggle('is-disabled', i === 0); bs[1].classList.toggle('is-disabled', tr.scrollLeft >= tr.scrollWidth - tr.clientWidth - 4); }
    bs.forEach(function(b){ b.addEventListener('click', function(){ if (b.classList.contains('is-disabled')) return; go(idx() + (+b.dataset.dir)); }); });
    tr.addEventListener('scroll', function(){ clearTimeout(tr._t); tr._t = setTimeout(upd, 80); }, {passive:true}); upd();
    if ('IntersectionObserver' in window) new IntersectionObserver(function(e, o){ if (e[0].isIntersecting){ fr.classList.add('is-in'); o.disconnect(); } }, {threshold:.3}).observe(fr); else fr.classList.add('is-in');
  })();

  /* ================= 2-step form + attribution ================= */
  (function(){
    var form = document.getElementById('audit-form'); if (!form) return;
    var steps = [document.getElementById('step-1'), document.getElementById('step-2')];
    var LAPIS_SELECTS = {
      'f-role':  ['Sviluppatore / proprietà','Direzione commerciale','Agenzia di nuove costruzioni','Altro'],
      'f-units': ['Meno di 20','20–50','50–100','Più di 100'],
      'f-phase': ['In progettazione','Cantiere avviato','Già in vendita']
    };
    Object.keys(LAPIS_SELECTS).forEach(function(id){ var s = document.getElementById(id); if (!s || s.options.length > 1) return;
      s.innerHTML = ''; var o0 = new Option('Seleziona', ''); s.appendChild(o0);
      LAPIS_SELECTS[id].forEach(function(t){ s.appendChild(new Option(t, t)); }); s.required = true; });
    var bar = form.querySelector('.form_steps i'), fill = form.querySelector('.form_steps_fill'), lbl = document.getElementById('form-step-lbl'), subl = form.querySelector('.form_steps span');
    function track(ev, extra){ window.dataLayer = window.dataLayer || []; var o = {event: ev}; for (var k in (extra || {})) o[k] = extra[k]; window.dataLayer.push(o); }
    function show(n){ steps.forEach(function(s, i){ s.hidden = i !== n; }); if (fill) fill.style.width = n ? '100%' : '50%'; else if (bar) bar.style.setProperty('--p', n ? '100%' : '50%'); lbl.textContent = 'Passo ' + (n + 1) + ' di 2'; subl.textContent = n ? 'Chi sei' : 'Il progetto'; }
    function valid(step){ var bad = null; [].forEach.call(step.querySelectorAll('input,select'), function(el){ if (!bad && !el.checkValidity()) bad = el; }); if (bad){ bad.reportValidity(); return false; } return true; }
    document.getElementById('form-next').addEventListener('click', function(){ if (!valid(steps[0])) return; show(1); track('audit_step', {form_step: 2}); steps[1].querySelector('select').focus(); });
    document.getElementById('form-back').addEventListener('click', function(){ show(0); });
    var q = new URLSearchParams(location.search);
    ['utm_source','utm_medium','utm_campaign','utm_content','utm_term','gclid','fbclid'].forEach(function(k){ var el = form.querySelector('[name="' + k + '"]'); if (el && q.get(k)) el.value = q.get(k); });
    var rf = form.querySelector('[name="referrer"]'); if (rf) rf.value = document.referrer || '';
    var lp = form.querySelector('[name="landing_page"]'); if (lp) lp.value = location.href.split('#')[0];
    form.addEventListener('submit', function(e){
      if (!valid(steps[1])){ e.preventDefault(); e.stopImmediatePropagation(); return; }
      var data = {}; new FormData(form).forEach(function(v, k){ data[k] = v; });
      track('audit_request', {ruolo: data.ruolo, unita: data.unita, fase: data.fase, comune: data.comune});
      /* Webflow's own handler submits via AJAX and swaps in .w-form-done (styled as .form_ok). */
    });
    show(0);
  })();

  /* ================= Scroll-lit copy (problem) ================= */
  (function(){
    var els = [].slice.call(document.querySelectorAll('[data-hl]')); if (!els.length) return;
    var items = els.map(function(el){
      var words = [];
      (function walk(node, em){
        [].slice.call(node.childNodes).forEach(function(n){
          if (n.nodeType === 3){
            var frag = document.createDocumentFragment();
            n.textContent.split(/(\s+)/).forEach(function(tok){
              if (!tok) return;
              if (/^\s+$/.test(tok)){ frag.appendChild(document.createTextNode(tok)); return; }
              var s = document.createElement('span'); s.className = 'hlw'; s.textContent = tok; frag.appendChild(s); words.push(s);
            });
            node.replaceChild(frag, n);
          } else if (n.nodeType === 1) walk(n, em || n.tagName === 'EM');
        });
      })(el, false);
      return {el:el, mode:el.dataset.hl, words:words, drv: el.dataset.hl === 'sticky' ? el.closest('section') : el, last:-1};
    });
    if (reduce){ items.forEach(function(it){ it.words.forEach(function(w){ w.style.setProperty('--o', 1); }); }); return; }
    function update(){
      var vh = window.innerHeight;
      items.forEach(function(it){
        var r = it.drv.getBoundingClientRect(), p;
        if (it.mode === 'sticky') p = (-r.top + vh*.15) / Math.max(1, r.height - vh*.95);
        else p = (vh*.88 - r.top) / (vh*.55);
        p = Math.min(1, Math.max(0, p));
        if (Math.abs(p - it.last) < .002) return; it.last = p;
        var n = it.words.length, f = p * (n + 2);
        it.words.forEach(function(w, i){ w.style.setProperty('--o', Math.min(1, Math.max(0, f - i)).toFixed(3)); });
      });
    }
    window.addEventListener('scroll', function(){ requestAnimationFrame(update); }, {passive:true});
    window.addEventListener('resize', update); update();
  })();

  /* ================= Optimization loop (simple, native) ================= */
  (function(){
    ['lo-old','lo-new'].forEach(function(id){ var el=document.getElementById(id); if(!el) return;
      if(reduce||!('IntersectionObserver' in window)){ el.classList.add('is-in'); return; }
      new IntersectionObserver(function(e,o){ if(e[0].isIntersecting){ el.classList.add('is-in'); o.disconnect(); } },{threshold:.2}).observe(el); });
    var box=document.getElementById('cy'); if(!box) return;
    var steps=[].slice.call(box.querySelectorAll('.cy_steps span')), dots=[].slice.call(box.querySelectorAll('#cy-dots circle')),
        logs=[].slice.call(box.querySelectorAll('#cy-log li')), line=document.getElementById('cy-line'), rect=document.getElementById('cy-rect'), cw=0, tw=0, raf=0, kpi=document.getElementById('cy-kpi'), dl=document.getElementById('cy-delta');
    var K=[118,104,92,79,63], W=['Sett. 1','Sett. 3','Sett. 5','Sett. 7','Sett. 10'], P=[9,21,39,57,82], cyc=0, ph=0, t=null;
    function go(w){ tw=w; if(reduce){ cw=w; rect.setAttribute('width',w); return; } cancelAnimationFrame(raf); (function f(){ cw+=(tw-cw)*.12; if(Math.abs(tw-cw)<.5) cw=tw; rect.setAttribute('width',cw.toFixed(1)); if(cw!==tw) raf=requestAnimationFrame(f); })(); }
    function render(){
      steps.forEach(function(s,i){ s.classList.toggle('is-on',i===ph); });
      go(P[cyc]*4.4);
      dots.forEach(function(d,i){ d.classList.toggle('is-on',i<cyc); });
      logs.forEach(function(l,i){ l.classList.toggle('is-on',i<cyc); });
      kpi.textContent=K[cyc]+' €';
      dl.textContent=cyc?('−'+Math.round((1-K[cyc]/K[0])*100)+'% · '+W[cyc]):W[0];
    }
    function tick(){
      ph++;
      if(ph>3){ ph=0; cyc++; if(cyc>=K.length){ go(440); clearInterval(t); setTimeout(function(){ cyc=0; ph=0; render(); t=setInterval(tick,800); },2600); return; } }
      render();
    }
    render();
    if(reduce){ cyc=K.length-1; ph=3; render(); cw=440; rect.setAttribute('width',440); return; }
    var on=false;
    new IntersectionObserver(function(e){ if(e[0].isIntersecting&&!on){ on=true; t=setInterval(tick,800); } else if(!e[0].isIntersecting&&on){ on=false; clearInterval(t); } },{threshold:.3}).observe(box);
  })();

  /* ================= 3D hover: lift, scale, tilt, follow the cursor (shared with chi-siamo) ================= */
  (function(){
    var grid=document.getElementById('svc-grid'); if(!grid||reduce) return;
    var S=[].slice.call(grid.querySelectorAll('.t3')).map(function(el,i){ return {el:el,i:i,h:0,th:0,px:0,py:0,tpx:0,tpy:0}; });
    function target(s,e){ var r=s.el.getBoundingClientRect(); s.tpx=Math.max(-1,Math.min(1,((e.clientX-r.left)/r.width)*2-1)); s.tpy=Math.max(-1,Math.min(1,((e.clientY-r.top)/r.height)*2-1)); }
    function on(s){ S.forEach(function(o){ o.th=0; o.el.classList.remove('is-hot'); }); s.th=1; s.el.classList.add('is-hot'); grid.classList.add('is-hot'); }
    function off(s){ s.th=0; s.tpx=0; s.tpy=0; s.el.classList.remove('is-hot'); if(!S.some(function(o){ return o.th; })) grid.classList.remove('is-hot'); }
    S.forEach(function(s){
      s.el.addEventListener('pointerenter',function(e){ if(e.pointerType==='touch') return; on(s); target(s,e); });
      s.el.addEventListener('pointermove',function(e){ if(e.pointerType==='touch') return; if(!s.th) on(s); target(s,e); });
      s.el.addEventListener('pointerleave',function(){ off(s); });
      s.el.addEventListener('focus',function(){ on(s); s.tpy=-.3; });
      s.el.addEventListener('blur',function(){ off(s); });
    });
    var vis=false;
    new IntersectionObserver(function(e){ vis=e[0].isIntersecting; if(vis) requestAnimationFrame(tick); }).observe(grid);
    function tick(t){
      S.forEach(function(s){
        s.h+=(s.th-s.h)*.11; s.px+=(s.tpx-s.px)*.14; s.py+=(s.tpy-s.py)*.14;
        var h=s.h, st=s.el.style;
        st.setProperty('--h',h.toFixed(3));
        st.setProperty('--rx',(-s.py*10*h).toFixed(2)+'deg');
        st.setProperty('--ry',(s.px*13*h).toFixed(2)+'deg');
        st.setProperty('--tx',(s.px*12*h).toFixed(1)+'px');
        st.setProperty('--ty',(s.py*8*h-8*h).toFixed(1)+'px');
        st.setProperty('--tz',(36*h).toFixed(1)+'px');
        st.setProperty('--s',(1+.05*h).toFixed(3));
        st.setProperty('--gx',(50+s.px*45).toFixed(1)+'%');
        st.setProperty('--gy',(40+s.py*45).toFixed(1)+'%');
      });
      if(vis) requestAnimationFrame(tick);
    }
  })();


  /* ================= Scroll-driven unblur (problem assets + solution cards) ================= */
  (function(){
    var prob=document.getElementById('problema'), olds=prob?[].slice.call(prob.querySelectorAll('.old')):[], bl=[].slice.call(document.querySelectorAll('[data-blur]'));
    function sm(x){x=Math.min(1,Math.max(0,x));return x*x*(3-2*x);}
    if(reduce){ olds.concat(bl).concat([].slice.call(document.querySelectorAll('#soluzione .old'))).forEach(function(e){ e.style.setProperty('--v',1); e.classList.add('is-clear'); }); return; }
    var ans=document.querySelector('#soluzione.pq_section'), acs=ans?[].slice.call(ans.querySelectorAll('.old')):[];
    function up(){
      var vh=window.innerHeight;
      if(ans){ var ra=ans.getBoundingClientRect(), pa=Math.min(1,Math.max(0,-ra.top/Math.max(1,ra.height-vh)));
        acs.forEach(function(e,i){ var v=sm((pa-.08-i*.16)/.22); e.style.setProperty('--v',v.toFixed(3)); e.classList.toggle('is-clear',v>.995); }); }
      if(prob){ var r=prob.getBoundingClientRect(), p=Math.min(1,Math.max(0,-r.top/Math.max(1,r.height-vh)));
        olds.forEach(function(e,i){ e.style.setProperty('--v',sm((p-.08-i*.16)/.22).toFixed(3)); }); }
      bl.forEach(function(e){ if(e.classList.contains('is-hot')) return; var r=e.getBoundingClientRect(), v=sm((vh*.98-r.top)/(vh*.42)); e.style.setProperty('--v',v.toFixed(3)); e.classList.toggle('is-clear',v>.995); });
    }
    window.addEventListener('scroll',function(){ requestAnimationFrame(up); },{passive:true}); window.addEventListener('resize',up); up();
  })();


  /* ================= Stars at the bottom of the services block (blend into the network) ================= */
  (function(){
    var c=document.getElementById('svc-stars'); if(!c) return;
    var ctx=c.getContext('2d'), D=Math.min(2,window.devicePixelRatio||1), pts=[], lines=[];
    function build(){
      var r=c.getBoundingClientRect(); c.width=r.width*D; c.height=r.height*D; ctx.setTransform(D,0,0,D,0,0);
      var W=r.width,H=r.height,n=Math.round(W*H/5200); pts=[];
      for(var k=0;k<n;k++){ var y=Math.pow(Math.random(),.45); if(Math.random()>y*y) continue; pts.push({x:Math.random()*W,y:y*H,z:.2+Math.random()*.8,t:Math.random()*6.3}); }
      lines=[]; pts.forEach(function(a,i){ if(a.y<H*.55) return; var best=null,bd=1e9; pts.forEach(function(b,j){ if(j<=i||b.y<H*.55) return; var d=(a.x-b.x)*(a.x-b.x)+(a.y-b.y)*(a.y-b.y); if(d<bd){bd=d;best=b;} }); if(best&&bd<140*140) lines.push([a,best]); });
      draw(0);
    }
    function draw(t){
      var W=c.width/D,H=c.height/D; ctx.clearRect(0,0,W,H);
      lines.forEach(function(l){ var f=Math.min(1,(l[0].y/H-.55)/.45); ctx.strokeStyle='rgba(255,255,255,'+(.08*f)+')'; ctx.lineWidth=1; ctx.beginPath(); ctx.moveTo(l[0].x,l[0].y); ctx.lineTo(l[1].x,l[1].y); ctx.stroke(); });
      pts.forEach(function(p){ var f=Math.min(1,p.y/H*1.2), tw=reduce?1:.7+.3*Math.sin(t/1400+p.t); ctx.fillStyle='rgba(255,255,255,'+((.2+.5*p.z)*f*tw)+')'; ctx.beginPath(); ctx.arc(p.x,p.y,.7+p.z*.9,0,7); ctx.fill(); });
    }
    var vis=false; new IntersectionObserver(function(e){ vis=e[0].isIntersecting; if(vis&&!reduce) requestAnimationFrame(loop); }).observe(c);
    function loop(t){ draw(t); if(vis) requestAnimationFrame(loop); }
    var rt; window.addEventListener('resize',function(){ clearTimeout(rt); rt=setTimeout(build,150); });
    build();
  })();



  /* ================= Merged problem -> solution story ================= */
  (function(){
    var sec=document.getElementById('soluzione'); if(!sec||!sec.classList.contains('mg')) return;
    var ws=[].slice.call(sec.querySelectorAll('.mg_l1 .mw')), olds=[].slice.call(sec.querySelectorAll('.mg_old .old')), nw=sec.querySelector('.mg_new');
    var ics=[].slice.call(sec.querySelectorAll('.chi_i')), cards=[].slice.call(sec.querySelectorAll('.dk')), tt=[].slice.call(sec.querySelectorAll('.dk_t')), ds=[].slice.call(sec.querySelectorAll('.dk_dots i')), li=0, lc=-1;
    function sm(x){x=Math.min(1,Math.max(0,x));return x*x*(3-2*x);}
    function setCard(c){ lc=c; cards.forEach(function(e,i){ var d=i-c; e.style.setProperty('--d',Math.max(0,d)); e.classList.toggle('is-past',d<0); e.classList.toggle('is-top',d===0); });
      tt.forEach(function(e,i){ e.classList.toggle('is-on',i===c); e.classList.toggle('is-past',i<c); }); ds.forEach(function(e,i){ e.classList.toggle('is-on',i===c); e.classList.toggle('is-done',i<c); }); }
    function setIcon(k){ if(k===li) return; ics.forEach(function(e,i){ e.classList.toggle('is-out',i===li); e.classList.toggle('is-on',i===k); }); li=k; }
    function up(){
      var r=sec.getBoundingClientRect(), p=Math.min(1,Math.max(0,-r.top/Math.max(1,r.height-window.innerHeight)));
      if(reduce) p=.3;
      /* 0 - .14: the problem lights up, old assets come into focus */
      var f=sm(p/.1)*(ws.length+1); ws.forEach(function(w,i){ w.style.setProperty('--o',Math.min(1,Math.max(0,f-i)).toFixed(3)); });
      olds.forEach(function(e,i){ var v=sm((p-.01-i*.03)/.06); e.style.setProperty('--v',v.toFixed(3)); });
      /* .14 - .22: the turn */
      var t=sm((p-.13)/.06); sec.style.setProperty('--t',t.toFixed(3)); nw.classList.toggle('is-clear',t>.995); sec.classList.toggle('is-turned',t>.995);
      /* .24 - .98: four cards, one per scroll step */
      var c=Math.min(cards.length-1,Math.floor(Math.max(0,(p-.24)/.74)*cards.length)); if(c!==lc) setCard(c); vis=r.bottom>0&&r.top<window.innerHeight;
    }
    (function(){ var el=sec.querySelector('.chi'); if(!el||reduce) return; var h=0,th=0,px=0,py=0,tx=0,ty=0,raf=0;
      function tick(){ h+=(th-h)*.12; px+=(tx-px)*.15; py+=(ty-py)*.15; var st=el.style;
        st.setProperty('--h',h.toFixed(3)); st.setProperty('--rx',(-py*24*h).toFixed(2)+'deg'); st.setProperty('--ry',(px*28*h).toFixed(2)+'deg');
        st.setProperty('--tz',(28*h).toFixed(1)+'px'); st.setProperty('--s',(1+.22*h).toFixed(3)); st.setProperty('--gx',(50+px*45).toFixed(1)+'%'); st.setProperty('--gy',(40+py*45).toFixed(1)+'%');
        if(Math.abs(th-h)>.002||Math.abs(tx-px)>.002||Math.abs(ty-py)>.002) raf=requestAnimationFrame(tick); else raf=0; }
      function go(){ if(!raf) raf=requestAnimationFrame(tick); }
      var zone=sec.querySelector('.mg_h');
      zone.addEventListener('pointermove',function(e){ var r=el.getBoundingClientRect(), m=r.width*1.4, d=Math.hypot(e.clientX-(r.left+r.width/2),e.clientY-(r.top+r.height/2)); th=d<r.width*2.2?1:0;
        if(th){ tx=Math.max(-1,Math.min(1,(e.clientX-(r.left+r.width/2))/m)); ty=Math.max(-1,Math.min(1,(e.clientY-(r.top+r.height/2))/m)); } else { tx=0; ty=0; } go(); });
      zone.addEventListener('pointerleave',function(){ th=0; tx=0; ty=0; go(); });
    })();
    var vis=false; if(!reduce) setInterval(function(){ if(vis&&!document.hidden) setIcon((li+1)%ics.length); },1200);
    setCard(0); window.addEventListener('scroll',function(){ requestAnimationFrame(up); },{passive:true}); window.addEventListener('resize',up); up();
  })();
  /* ================= Lead funnel (V1): three stages, zoom ================= */
  (function(){
    var sec=document.getElementById('rp-funnel'), cv=document.getElementById('lf-canvas'); if(!sec||!cv) return; var AUTO=sec.hasAttribute('data-auto');
    var ctx=cv.getContext('2d'), items=[].slice.call(sec.querySelectorAll('.lf_item'));
    var W=0,H=0,DPR=1, f=0, fT=0, step=0, DUR=(AUTO?4.5:8), idle=0, pinned=false, visible=false, ph=0, emitT=0, emitI=0, pulse=0, mStepT=0, autoLock=0, zTime=0;
    var reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var SRC=[['Meta','#1877F2',-60],['Google','#34A853',0],['Immobiliare.it','#3B9BEA',60],['idealista','#F2D42E',120],['Casa.it','#FF3B5C',180],['Sito','#F08A4B',240]]
      .map(function(s){return {n:s[0],c:s[1],a:s[2]*Math.PI/180};});
    var ORDER=[4,1,5,0,3,2];
    var TAGS=[['Nome','Giulia Rossi',0,-1.2,'nome'],['Fonte','Meta · Reels',-1,-.62,'fonte'],['Campagna','Trilocali Milano',1,-.62,'camp'],['Telefono','+39 347 ••• 21',-1,.66,'tel'],['Stato','Visita fissata',1,.66,'stato'],['Annuncio','Carousel planimetrie',0,1.26,'ann']];
    var WORD=[];
    function buildWord(){var oc=document.createElement('canvas'),w=420,hh=160;oc.width=w;oc.height=hh;var o=oc.getContext('2d');
      o.fillStyle='#fff';o.font='800 150px Inter, system-ui, sans-serif';o.textAlign='center';o.textBaseline='middle';o.fillText('CRM',w/2,hh/2+6);
      var d=o.getImageData(0,0,w,hh).data;WORD=[];for(var y=0;y<hh;y+=6)for(var x=0;x<w;x+=6){if(d[(y*w+x)*4+3]>128)WORD.push({x:(x-w/2)/w,y:(y-hh/2)/w,c:Math.random()<.28?SRC[(Math.random()*6)|0].c:'#fff',fl:0,j:Math.random()*6.28,d:Math.random()*.45});}}
    buildWord();
    function resize(){var r=cv.getBoundingClientRect();DPR=Math.min(2,window.devicePixelRatio||1);W=r.width;H=r.height;cv.width=W*DPR;cv.height=H*DPR;ctx.setTransform(DPR,0,0,DPR,0,0);}
    function sm(x){x=Math.min(1,Math.max(0,x));return x*x*(3-2*x);}
    function cl(v){return Math.min(1,Math.max(0,v));}
    function lerp(a,b,t){return a+(b-a)*t;}
    function hex(c,al){var n=parseInt(c.slice(1),16);return 'rgba('+(n>>16)+','+((n>>8)&255)+','+(n&255)+','+Math.max(0,al).toFixed(3)+')';}

    /* ---------- 3D funnel: a surface of revolution that becomes an endless tube ---------- */
    var RT=.13, K=.2, D0=-.34, DMAX=18;
    function rad(d){return RT+(1-RT)*Math.exp(-d/K);}
    var C={P:[0,0,0],f:[0,0,1],u:[0,1,0],F:1};
    function setCam(m1,m2){
      var e=lerp(lerp(18,76+13*sm(zTime/6),m1),90,m2)*Math.PI/180;
      var ty=lerp(lerp(.22,1.1,m1),3.2,m2), D=lerp(lerp(3.7,1.75-.4*sm(zTime/6),m1),.2,m2);
      var se=Math.sin(e),ce=Math.cos(e);
      C.P=[0,ty-D*se,-D*ce]; C.f=[0,se,ce]; C.u=[0,-ce,se]; C.F=Math.min(W,H*1.2)*1.5*(1+3*m2*m2);}
    function pr(x,y,z){var vy=y-C.P[1],vz=z-C.P[2],zc=vy*C.f[1]+vz*C.f[2];if(zc<.06)return null;var yc=vy*C.u[1]+vz*C.u[2];return [W/2+C.F*x/zc,H/2-C.F*yc/zc,zc];}
    function sp(d,a){var r=rad(d);return pr(r*Math.cos(a),d,r*Math.sin(a));}
    function fade(d,m1){return cl((d-D0)/.1)*Math.exp(-Math.max(0,d-.35)/lerp(.1,3.4,m1));}
    function line(pts){var on=false;ctx.beginPath();for(var i=0;i<pts.length;i++){var p=pts[i];if(!p){on=false;continue;}if(on)ctx.lineTo(p[0],p[1]);else{ctx.moveTo(p[0],p[1]);on=true;}}}

    var cP=0;function wordU(pt){return sm((cP-pt.d)/.55);}
    function wordPt(pt){var sc=Math.min(W*.78,560),u=wordU(pt),ang=(1-u)*2.6,x=pt.x*sc*u,y=pt.y*sc*u,ca=Math.cos(ang),sa=Math.sin(ang);return [W/2+x*ca-y*sa+Math.sin(pt.j)*1.2*u, H/2+x*sa+y*ca+Math.cos(pt.j)*1.2*u];}

    var leads=[], DOTS=[];
    for(var i=0;i<8;i++)DOTS.push({d:2.5+Math.random()*7,a:Math.random()*6.28,r:Math.random()*RT*.7,j:Math.random()*6.28});
    function emit(){var s=SRC[ORDER[emitI%ORDER.length]];emitI++;leads.push({s:s,d:D0,w:WORD[(Math.random()*WORD.length)|0],hit:false});}

    function setStep(n){if(n===step)return;step=n;items.forEach(function(it,i){it.classList.toggle('is-active',i===n);});}
    function desk(){return !AUTO&&window.innerWidth>900;}
    function geo(){var r=sec.getBoundingClientRect(),vh=window.innerHeight;return {top:r.top+window.scrollY,span:Math.max(1,r.height-vh),rt:r.top,rb:r.bottom,vh:vh};}
    function scrollState(){var g=geo();var p=cl(-g.rt/g.span);pinned=g.rt<=1&&g.rb>=g.vh-1;return p;}
    function goStep(k){var g=geo();autoLock=performance.now();window.scrollTo({top:g.top+g.span*(k/3+.015),behavior:'smooth'});}
    items.forEach(function(it,i){it.querySelector('[data-btn],button').addEventListener('click',function(){if(desk())goStep(i);else{setStep(i);fT=i;mStepT=0;}});});
    window.addEventListener('scroll',function(){if(performance.now()-autoLock>900)idle=0;},{passive:true});
    ['wheel','touchmove','keydown'].forEach(function(ev){window.addEventListener(ev,function(){idle=0;autoLock=0;},{passive:true});});
    if('IntersectionObserver' in window){new IntersectionObserver(function(e){visible=e[0].isIntersecting;},{threshold:.3}).observe(sec);}else visible=true;
    window.addEventListener('resize',resize);
    var last=performance.now();
    function frame(now){var dt=Math.min(.05,(now-last)/1000);last=now;
      if(desk()){
        var p=scrollState(), seg=Math.min(2.999,p*3), k=Math.floor(seg), fr=seg-k;
        fT=Math.min(2,k+sm((fr-.8)/.2)); setStep(Math.min(2,Math.round(fT-.001)));
        if(pinned){idle+=dt;}else idle=0;
        items.forEach(function(it,i){var v=0;if(i===k)v=Math.max(fr,Math.min(1,idle/DUR));else if(i<k)v=1;it.querySelector('.lf_bar').style.setProperty('--lf-p',v);});
        if(pinned&&k<2&&idle>=DUR){idle=0;goStep(k+1);}
      }else{
        if(visible){mStepT+=dt;if(mStepT>=DUR){mStepT=0;var n=(step+1)%3;setStep(n);fT=n;}}
        items.forEach(function(it,i){it.querySelector('.lf_bar').style.setProperty('--lf-p',i===step?Math.min(1,mStepT/DUR):0);});
      }
      /* slow, continuous camera move between phases */
      var gap=fT-f; f+=gap*Math.min(1,dt*(AUTO?1.3:.85)); if(Math.abs(gap)<.002)f=fT;
      if(f>.5)zTime+=dt; else zTime=Math.max(0,zTime-dt*2);
      var m1=sm(Math.min(1,f)), m2=sm(Math.max(0,f-1)), A=1-m1; K=lerp(.2,.34,m1);
      setCam(m1,m2);
      if(!reduce)ph=(ph+dt*(.05+.42*m1+1.4*m2))%1;
      pulse=Math.max(0,pulse-dt*1.2);
      ctx.clearRect(0,0,W,H); ctx.lineWidth=1; ctx.lineCap='round';
      var tun=1-.88*m2;

      /* rings: dashed, always flowing down the funnel and on into the tube */
      for(var i=0;i<40;i++){var d=D0+.085*Math.pow(i+ph,1.55);if(d>DMAX)break;
        var al=(.11*A+.27*m1)*fade(d,m1)*tun;if(al<.006)continue;
        var c0=pr(0,d,0);if(!c0)continue;var sr=C.F*rad(d)/c0[2];if(sr<1.5)continue;
        var pts=[];for(var j=0;j<=96;j++)pts.push(sp(d,j/96*Math.PI*2));
        ctx.setLineDash([Math.max(1.4,sr*.032),Math.max(3,sr*.05)*m1]);ctx.lineDashOffset=-now*.004;
        line(pts);ctx.strokeStyle='rgba(255,255,255,'+al.toFixed(3)+')';ctx.stroke();}
      /* meridians: longer dashes near the rim, fine dots deep down */
      var SEG=[[D0,.3,[4,7],1],[.3,1.6,[2,4.6],.85],[1.6,DMAX,[1.2,3.4],.6]];
      for(var k2=0;k2<14;k2++){var a=k2/14*Math.PI*2+.12;
        SEG.forEach(function(sg){var prev=null,pd=0;ctx.setLineDash([sg[2][0],sg[2][1]*m1]);
          for(var j=0;j<=30;j++){var t=j/30,dd=sg[0]+(sg[1]-sg[0])*t*t,q=sp(dd,a);
            if(prev&&q){var al=(.07*A+.4*m1)*sg[3]*tun*fade((dd+pd)/2,m1);if(al>.005){ctx.strokeStyle='rgba(255,255,255,'+al.toFixed(3)+')';ctx.beginPath();ctx.moveTo(prev[0],prev[1]);ctx.lineTo(q[0],q[1]);ctx.stroke();}}
            prev=q;pd=dd;}});}
      ctx.setLineDash([]);ctx.lineDashOffset=0;

      /* sources on the rim (phase 1) */
      if(A>.03){ctx.font='500 12px Inter, system-ui, sans-serif';ctx.textAlign='center';
        SRC.forEach(function(src){var q=sp(0,src.a);if(!q||q[0]<20||q[0]>W-20||q[1]<16||q[1]>H-8)return;
          ctx.fillStyle=hex(src.c,.18*A);ctx.beginPath();ctx.arc(q[0],q[1],8,0,7);ctx.fill();
          ctx.fillStyle=hex(src.c,A);ctx.beginPath();ctx.arc(q[0],q[1],3.6,0,7);ctx.fill();
          ctx.fillStyle='rgba(242,239,234,'+(.72*A).toFixed(3)+')';ctx.fillText(src.n,q[0],q[1]-14);});}

      /* tiny particles deep in the tube */
      var dz=m1*tun;if(dz>.02)DOTS.forEach(function(o){o.j+=dt*1.6;var q=pr(o.r*Math.cos(o.a),o.d,o.r*Math.sin(o.a));if(!q)return;ctx.fillStyle='rgba(255,255,255,'+(dz*(.3+.25*Math.sin(o.j))).toFixed(3)+')';ctx.beginPath();ctx.arc(q[0],q[1],1.1,0,7);ctx.fill();});

      /* CRM word (phase 3) */
      cP=sm((m2-.12)/.88);
      if(m2>.02){
        var bl=m2*(1-cP);if(bl>.01){var g=ctx.createRadialGradient(W/2,H/2,0,W/2,H/2,120);g.addColorStop(0,'rgba(255,255,255,'+(.22*bl)+')');g.addColorStop(1,'rgba(255,255,255,0)');ctx.fillStyle=g;ctx.beginPath();ctx.arc(W/2,H/2,120,0,7);ctx.fill();}
        WORD.forEach(function(pt){pt.j+=dt*.8;pt.fl=Math.max(0,pt.fl-dt*1.5);var u=wordU(pt);if(u<=.001)return;var q=wordPt(pt),rd=(.8+.55*u)+pt.fl*2.2;
          var col=pt.c==='#fff'?'#FFFFFF':pt.c;ctx.fillStyle=pt.fl>0?'#fff':hex(col,Math.min(1,u*1.3)*(pt.c==='#fff'?.88:.95));ctx.beginPath();ctx.arc(q[0],q[1],rd,0,7);ctx.fill();});
      }

      /* leads: one smooth path along the funnel wall, straight down into the dark */
      emitT-=dt; if(emitT<=0&&!reduce){emit();emitT=1.25;}
      leads=leads.filter(function(l){
        l.d+=dt*(.17+1.05*Math.max(0,l.d))*(1+.35*m1);
        var fd=fade(l.d,m1); if(l.d>DMAX*.6||(l.d>.6&&fd<.015))return false;
        if(m2>.5&&l.d>1.1){if(l.w)l.w.fl=1;pulse=1;return false;}
        if(!l.hit&&l.d>2.2&&m1>.5){l.hit=true;pulse=1;}
        var a=l.s.a, wt=l.w&&m2>.01?wordPt(l.w):null;
        function at(d){var q=sp(d,a);if(q&&wt){var b=m2*sm((d-D0)/1.3);q=[q[0]+(wt[0]-q[0])*b,q[1]+(wt[1]-q[1])*b,q[2]];}return q;}
        var L=.22+.3*Math.max(0,l.d), tr=[], n=16;
        for(var j=0;j<=n;j++){var dd=Math.max(D0,l.d-L*(1-j/n));tr.push([at(dd),dd]);}
        var h=tr[n][0];if(!h)return true;
        var sz=cl(C.F/h[2]*.004);
        for(var j=1;j<=n;j++){var p0=tr[j-1][0],p1=tr[j][0];if(!p0||!p1)continue;var dd=tr[j][1];
          var col=dd<0?'#FFFFFF':l.s.c, al=(j/n)*fade(dd,m1)*(col==='#FFFFFF'?.55:.95);
          ctx.strokeStyle=hex(col,al);ctx.lineWidth=1.6+m1*3.6*sz;ctx.beginPath();ctx.moveTo(p0[0],p0[1]);ctx.lineTo(p1[0],p1[1]);ctx.stroke();}
        if(m1>.05){ctx.setLineDash([4+8*sz,8+12*sz]);ctx.lineDashOffset=-now*.05;ctx.strokeStyle=hex(l.d<0?'#FFFFFF':l.s.c,.7*m1*fd);ctx.lineWidth=1;line(tr.map(function(t){return t[0];}));ctx.stroke();ctx.setLineDash([]);ctx.lineDashOffset=0;
          var pb=tr[Math.max(0,n-5)][0];if(pb){var ang=Math.atan2(pb[1]-h[1],pb[0]-h[0]),hr=(3+16*sz)*m1;ctx.fillStyle=hex(l.d<0?'#969696':l.s.c,.35*m1*fd);ctx.beginPath();ctx.moveTo(h[0],h[1]);ctx.arc(h[0],h[1],hr,ang-Math.PI*.2,ang+Math.PI*1.2,true);ctx.closePath();ctx.fill();}}
        var hR=Math.max(1,lerp(2.3,1.6+6*sz,m1)*(l.d>.4&&m1<.5?Math.max(.4,1-(l.d-.4)*.5):1));if(l.d>0){ctx.fillStyle=hex(l.s.c,.9*fd);ctx.beginPath();ctx.arc(h[0],h[1],hR+1.4,0,7);ctx.fill();}
        ctx.fillStyle='rgba(255,255,255,'+fd.toFixed(3)+')';ctx.beginPath();ctx.arc(h[0],h[1],Math.max(1,lerp(2.3,1.6+6*sz,m1)*(l.d>.4&&m1<.5?Math.max(.4,1-(l.d-.4)*.5):1)),0,7);ctx.fill();
        return true;});


      /* the white dot at the end of the tunnel */
      var ca=m1*(1-sm((m2-.1)/.4));
      if(ca>.02){var c0=pr(0,40,0)||[W/2,H/2];var cr=3+2*ca+pulse*1.6;
        var g2=ctx.createRadialGradient(c0[0],c0[1],0,c0[0],c0[1],46);g2.addColorStop(0,'rgba(255,255,255,'+(.1*ca+.12*pulse*ca)+')');g2.addColorStop(1,'rgba(255,255,255,0)');ctx.fillStyle=g2;ctx.beginPath();ctx.arc(c0[0],c0[1],46,0,7);ctx.fill();
        ctx.fillStyle='rgba(255,255,255,'+ca+')';ctx.beginPath();ctx.arc(c0[0],c0[1],cr,0,7);ctx.fill();}
      requestAnimationFrame(frame);}

    function drawTag(t,i,ta,now){
      var MOB={nome:[-.5,-1],fonte:[.5,-1],stato:[-.5,1],ann:[.5,1]};if(W<600&&!MOB[t[4]])return;
      var sc=Math.min(W*.78,560)*.5, cx=W<600?W/2+MOB[t[4]][0]*(W-24)/2*1.02:W/2+t[2]*Math.min(sc*.8,W/2-100), cy=W<600?H/2+MOB[t[4]][1]*(sc*.58+48)+(1-ta)*10:H/2+t[3]*sc*(t[2]===0?.6:.66)+(1-ta)*10, w=W<600?150:184, hgt=W<600?46:54, x=cx-w/2, y=cy-hgt/2, k=t[4];
      // connector to the word
      var tx=W<600?cx*.7+W/2*.3:W/2+t[2]*sc*.55, ty=W<600?H/2+MOB[t[4]][1]*sc*.3:H/2+t[3]*sc*.3, ex=(W<600||t[2]===0)?cx:(t[2]<0?x+w:x), ey=(W<600||t[2]===0)?((W<600?MOB[t[4]][1]:t[3])<0?y+hgt:y):cy;
      ctx.save();ctx.globalAlpha=ta;ctx.setLineDash([2,4]);ctx.strokeStyle='rgba(255,255,255,.22)';ctx.beginPath();ctx.moveTo(ex,ey);ctx.lineTo(tx,ty);ctx.stroke();ctx.setLineDash([]);
      ctx.fillStyle='rgba(255,255,255,.55)';ctx.beginPath();ctx.arc(tx,ty,2,0,7);ctx.fill();
      // card
      ctx.shadowColor='rgba(0,0,0,.55)';ctx.shadowBlur=28;ctx.shadowOffsetY=10;
      var bg=ctx.createLinearGradient(0,y,0,y+hgt);bg.addColorStop(0,'rgba(44,42,40,.94)');bg.addColorStop(1,'rgba(22,21,20,.94)');
      rr(x,y,w,hgt,13);ctx.fillStyle=bg;ctx.fill();ctx.shadowColor='transparent';ctx.shadowBlur=0;ctx.shadowOffsetY=0;
      var br=ctx.createLinearGradient(0,y,0,y+hgt);br.addColorStop(0,'rgba(255,255,255,.22)');br.addColorStop(1,'rgba(255,255,255,.05)');ctx.strokeStyle=br;ctx.lineWidth=1;rr(x+.5,y+.5,w-1,hgt-1,12.5);ctx.stroke();
      // icon
      var ix=x+(W<600?22:26), iy=cy, ir=W<600?12:14;
      ctx.beginPath();ctx.arc(ix,iy,ir,0,7);
      if(k==='nome'){var ag=ctx.createLinearGradient(ix-ir,iy-ir,ix+ir,iy+ir);ag.addColorStop(0,'#E08B65');ag.addColorStop(1,'#8E3F26');ctx.fillStyle=ag;ctx.fill();ctx.fillStyle='#fff';ctx.font='700 10px Inter, system-ui, sans-serif';ctx.textAlign='center';ctx.fillText('GR',ix,iy+3.5);}
      else if(k==='fonte'){ctx.fillStyle='rgba(24,119,242,.16)';ctx.fill();ctx.strokeStyle='#1877F2';ctx.lineWidth=1.6;ctx.beginPath();ctx.ellipse(ix-3.2,iy,3.4,4.4,0,0,7);ctx.stroke();ctx.beginPath();ctx.ellipse(ix+3.2,iy,3.4,4.4,0,0,7);ctx.stroke();}
      else if(k==='camp'){ctx.fillStyle='rgba(52,168,83,.16)';ctx.fill();ctx.fillStyle='#34A853';[[-6,4],[-1,8],[4,12]].forEach(function(bb){rr(ix+bb[0],iy+6-bb[1],3.6,bb[1],1.2);ctx.fill();});}
      else if(k==='tel'){ctx.fillStyle='rgba(255,255,255,.08)';ctx.fill();ctx.strokeStyle='rgba(255,255,255,.85)';ctx.lineWidth=1.4;rr(ix-4.5,iy-7,9,14,2.4);ctx.stroke();ctx.beginPath();ctx.moveTo(ix-1.5,iy+4.3);ctx.lineTo(ix+1.5,iy+4.3);ctx.stroke();}
      else if(k==='stato'){ctx.fillStyle='rgba(46,158,91,.16)';ctx.fill();var pr=(now/1000)%1.6/1.6;ctx.strokeStyle='rgba(74,200,120,'+(.6*(1-pr))+')';ctx.lineWidth=1.2;ctx.beginPath();ctx.arc(ix,iy,4+pr*7,0,7);ctx.stroke();ctx.fillStyle='#4AC878';ctx.beginPath();ctx.arc(ix,iy,4,0,7);ctx.fill();}
      else if(k==='ann'){ctx.fillStyle='rgba(255,255,255,.06)';ctx.fill();var tg=ctx.createLinearGradient(0,iy-8,0,iy+8);tg.addColorStop(0,'#3A3F63');tg.addColorStop(.6,'#B07A5E');tg.addColorStop(1,'#2A2622');rr(ix-9,iy-7,18,14,3);ctx.fillStyle=tg;ctx.fill();ctx.fillStyle='rgba(240,225,200,.9)';ctx.fillRect(ix-5,iy-3,4,7);ctx.fillRect(ix+1,iy-1,4,5);}
      // text
      var tx0=ix+ir+11;ctx.textAlign='left';
      ctx.fillStyle='rgba(242,239,234,.46)';ctx.font='600 9.5px ui-monospace, SFMono-Regular, monospace';ctx.fillText(t[0].toUpperCase(),tx0,cy-4.5);
      ctx.fillStyle='#F6F3EE';ctx.font=(W<600?'600 12px':'600 13px')+' Inter, system-ui, sans-serif';ctx.fillText(W<600&&k==='ann'?'Carousel':t[1],tx0,cy+11);
      if(k==='stato'){ctx.fillStyle='rgba(74,200,120,.9)';ctx.beginPath();ctx.arc(x+w-14,y+14,2.6,0,7);ctx.fill();}
      ctx.restore();}
    function rr(x,y,w,h,r){ctx.beginPath();ctx.moveTo(x+r,y);ctx.arcTo(x+w,y,x+w,y+h,r);ctx.arcTo(x+w,y+h,x,y+h,r);ctx.arcTo(x,y+h,x,y,r);ctx.arcTo(x,y,x+w,y,r);ctx.closePath();}
    resize();requestAnimationFrame(frame);
  })();

  /* ================= Header + sticky mobile CTA ================= */
  var header = document.getElementById('header');
  function onScroll(){ header.classList.toggle('is-scrolled', window.scrollY > 40); }
  window.addEventListener('scroll', onScroll, {passive:true}); onScroll();
  var sticky = document.getElementById('sticky-cta');
  if (sticky && 'IntersectionObserver' in window){
    var seen = {};
    var io = new IntersectionObserver(function(es){ es.forEach(function(e){ seen[e.target.id] = e.isIntersecting; }); sticky.classList.toggle('is-hidden', !!(seen.audit || seen['hero-ctas'])); }, {threshold:.15});
    ['audit','hero-ctas'].forEach(function(id){ var el = document.getElementById(id); if (el) io.observe(el); });
  }

  paintAll();
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(paintAll);
  scheduleTab();
  requestAnimationFrame(loop);
})();

/* --- d5b87 --- */
(function(){var app=document.querySelector('.rl_app');if(!app)return;
var io=new IntersectionObserver(function(e){e.forEach(function(x){if(x.isIntersecting){app.classList.add('is-in');start();io.disconnect();}})},{threshold:.25});io.observe(app);
var pool=[['Luca B.','Meta · Reels','Trilocale C4','Nuovo','n'],['Anna F.','Immobiliare.it','Bilocale A2','Visita fissata','v'],['Davide R.','Google · Ricerca','Attico D8','Richiamato','c'],['Chiara P.','Meta · Feed','Trilocale B3','Visita fissata','v'],['Matteo G.','idealista','Bilocale C1','Nuovo','n'],['Laura V.','Meta · Reels','Trilocale A5','Proposta','p']],k=0,t;
function start(){if(t)return;t=setInterval(function(){var ul=document.getElementById('rl-feed');if(!ul||document.hidden)return;var r=pool[k++%pool.length];var li=document.createElement('li');li.innerHTML='<span class="rl_av">'+r[0][0]+'</span><span class="rl_fi"><b>'+r[0]+'</b><small>'+r[1]+' · '+r[2]+'</small></span><span class="rl_st is-'+r[4]+'">'+r[3]+'</span>';ul.insertBefore(li,ul.firstChild);if(ul.children.length>5)ul.removeChild(ul.lastElementChild);},3200);}
})();
/* --- e201b --- */
/* Brand icon in "Il metodo dei grandi brand" (same 3D flip chip as V2 "ottimizziamo su") */
(function(){
  /* Paste the official logo URLs (Webflow asset library) here; empty = neutral monogram */
  var BRAND_LOGO = { adidas: '', idealo: '', jet: '' };
  [].forEach.call(document.querySelectorAll('.ha_logo[data-brand]'), function(s){ var u=BRAND_LOGO[s.dataset.brand]; if(u){ var im=new Image(); im.alt=s.textContent.trim(); im.src=u; s.insertBefore(im,s.firstChild); s.classList.add('has-logo'); } });
  var el=document.getElementById('brand-chi'); if(!el) return;
  var ics=[].slice.call(el.querySelectorAll('.chi_i')), li=0, vis=false;
  var reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  ics.forEach(function(i){ var u=BRAND_LOGO[i.dataset.brand]; if(u){ var im=new Image(); im.alt=''; im.src=u; i.insertBefore(im,i.firstChild); i.classList.add('has-logo'); } });
  function setIcon(k){ ics.forEach(function(e,i){ e.classList.toggle('is-out',i===li&&i!==k); e.classList.toggle('is-on',i===k); }); li=k; }
  if('IntersectionObserver' in window) new IntersectionObserver(function(e){ vis=e[0].isIntersecting; }).observe(el); else vis=true;
  if(!reduce) setInterval(function(){ if(!vis||document.hidden) return; el.classList.remove('is-spin'); void el.offsetWidth; el.classList.add('is-spin'); setTimeout(function(){ setIcon((li+1)%ics.length); },450); },3200);
  if(reduce) return;
  var h=0,th=0,px=0,py=0,tx=0,ty=0,raf=0;
  function tick(){ h+=(th-h)*.12; px+=(tx-px)*.15; py+=(ty-py)*.15; var st=el.style;
    st.setProperty('--h',h.toFixed(3)); st.setProperty('--rx',(-py*24*h).toFixed(2)+'deg'); st.setProperty('--ry',(px*28*h).toFixed(2)+'deg');
    st.setProperty('--tz',(28*h).toFixed(1)+'px'); st.setProperty('--s',(1+.22*h).toFixed(3)); st.setProperty('--gx',(50+px*45).toFixed(1)+'%'); st.setProperty('--gy',(40+py*45).toFixed(1)+'%');
    if(Math.abs(th-h)>.002||Math.abs(tx-px)>.002||Math.abs(ty-py)>.002) raf=requestAnimationFrame(tick); else raf=0; }
  function go(){ if(!raf) raf=requestAnimationFrame(tick); }
  var zone=el.closest('.method_head')||el;
  zone.addEventListener('pointermove',function(e){ var r=el.getBoundingClientRect(), m=r.width*1.4, d=Math.hypot(e.clientX-(r.left+r.width/2),e.clientY-(r.top+r.height/2)); th=d<r.width*2.2?1:0;
    if(th){ tx=Math.max(-1,Math.min(1,(e.clientX-(r.left+r.width/2))/m)); ty=Math.max(-1,Math.min(1,(e.clientY-(r.top+r.height/2))/m)); } else { tx=0; ty=0; } go(); });
  zone.addEventListener('pointerleave',function(){ th=0; tx=0; ty=0; go(); });
})();
/* --- 28803 --- */
/* Interactive framework chart */
(function(){
  var root=document.getElementById('fwx'); if(!root) return;
  var LD=[31, 37, 41, 52, 55, 66, 72, 86], V=[14, 17, 19, 24, 26, 31, 34, 40], C=[118, 104, 97, 88, 81, 74, 68, 62], T=["Avvio: 4 varianti Reels e Search", "6 varianti Reels · vince “terrazzo al tramonto”", "Nuove landing per trilocali", "Carousel planimetrie vs video", "Audience lookalike da visite reali", "Vetrina Immobiliare.it rinnovata", "Reels 15 s vs 30 s", "3 nuove creatività per gli attici"], S=["Budget iniziale 50/50 Meta-Google", "+200 € a Meta Reels", "−150 € a Google Display", "+300 € da Search a Reels", "Pausa su 2 annunci sotto media", "+250 € ai portali", "+200 € a Reels 15 s", "+400 € a Meta Reels"];
  var q=function(k){return root.querySelector('[data-k="'+k+'"]');}, cur=7, hov=false;
  function set(i){ cur=i;
    [].forEach.call(root.querySelectorAll('[data-i]'),function(e){ e.classList.toggle('is-on', +e.getAttribute('data-i')===i); });
    q('wk').textContent='Settimana '+(i+1); q('v').textContent=V[i]; q('c').textContent=C[i]+' €'; q('l').textContent=LD[i]; function dl(a,b,inv){ if(!i) return '<i class="is-n">baseline</i>'; var p=Math.round((a-b)/b*100), good=inv?p<0:p>0; return '<i class="'+(good?'is-g':'is-b')+'">'+(p>0?'+':'')+p+'% vs sett. '+i+'</i>'; } q('ld').innerHTML=dl(LD[i],LD[i-1]); q('vd').innerHTML=dl(V[i],V[i-1]); q('cd').innerHTML=dl(C[i],C[i-1],true);
    q('t').textContent=T[i];
    var d=i?Math.round((C[i]-C[i-1])/C[i-1]*100):0;
    q('m').textContent=LD[i]+' lead e '+V[i]+' visite tracciati nel CRM, per canale e annuncio';
    q('s').textContent=S[i]; }
  [].forEach.call(root.querySelectorAll('.fwx_hit'),function(h){ var i=+h.getAttribute('data-i');
    h.addEventListener('mouseenter',function(){hov=true;set(i);}); h.addEventListener('focus',function(){set(i);}); h.addEventListener('click',function(){set(i);}); });
  root.querySelector('.fwx_svg').addEventListener('mouseleave',function(){hov=false;});
  set(7);
  var reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches, vis=false;
  if('IntersectionObserver' in window) new IntersectionObserver(function(e){ vis=e[0].isIntersecting; if(vis) root.classList.add('is-in'); },{threshold:.3}).observe(root); else root.classList.add('is-in');
  if(!reduce) setInterval(function(){ if(vis&&!hov&&!document.hidden) set((cur+1)%8); },2600);
})();
/* --- a039c --- */
/* Testa + Misura interactions */
(function(){
  var reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var t=document.getElementById('tst');
  if(t){ var V=[['Variante A','14 lead · 6 visite · 118 €/visita','Spenta dopo 7 giorni'],
                ['Variante B','48 lead · 23 visite · 62 €/visita','Vincente: riceve +400 € venerdì'],
                ['Variante C','22 lead · 9 visite · 94 €/visita','In osservazione']];
    var bs=[].slice.call(t.querySelectorAll('[data-v]')), cap=t.querySelector('.tst_cap');
    function set(i){ bs.forEach(function(b,k){ b.classList.toggle('is-on',k===i); }); var v=V[i]; cap.innerHTML='<b>'+v[0]+'</b><br><span>'+v[1]+'</span><em>'+v[2]+'</em>'; }
    bs.forEach(function(b,k){ b.addEventListener('mouseenter',function(){set(k);}); b.addEventListener('focus',function(){set(k);}); b.addEventListener('click',function(){set(k);}); b.addEventListener('mouseleave',function(){set(1);}); b.addEventListener('blur',function(){set(1);}); });
    set(1);
  }
  var m=document.getElementById('meas');
  if(m){ var D={all:[1240,86,40],meta:[690,52,26],google:[380,21,9],portali:[170,13,5]}, L={all:'tutti i canali',meta:'Meta',google:'Google',portali:'i portali'};
    var tabs=[].slice.call(m.querySelectorAll('[data-c]')), st=[].slice.call(m.querySelectorAll('[data-s]')), out=m.querySelector('.ms_crm'), c='all', s=2, hov2=false, vis2=false;
    function f(n){ return n.toLocaleString('it-IT'); }
    function draw(){ var d=D[c]; st.forEach(function(e,k){ e.querySelector('b').textContent=f(d[k]); e.classList.toggle('is-on',k===s); });
      var txt=[f(d[0])+' clic da '+L[c],
               f(d[1])+' lead · '+(d[1]/d[0]*100).toFixed(1).replace('.',',')+'% dei clic, entrati nel tuo CRM',
               f(d[2])+' visite · '+Math.round(d[2]/d[1]*100)+'% dei lead, segnate dal venditore'][s];
      out.textContent=txt; }
    tabs.forEach(function(b){ b.addEventListener('click',function(){ c=b.dataset.c; tabs.forEach(function(x){x.classList.toggle('is-on',x===b);}); draw(); }); });
    st.forEach(function(e,k){ e.addEventListener('mouseenter',function(){hov2=true;s=k;draw();}); e.addEventListener('mouseleave',function(){hov2=false;}); e.addEventListener('click',function(){s=k;draw();}); });
    draw();
    if('IntersectionObserver' in window) new IntersectionObserver(function(e){vis2=e[0].isIntersecting;}).observe(m);
    var order=['all','meta','google','portali'];
    if(!reduce) setInterval(function(){ if(!vis2||hov2||document.hidden) return; c=order[(order.indexOf(c)+1)%4]; tabs.forEach(function(x){x.classList.toggle('is-on',x.dataset.c===c);}); draw(); },3400);
  }
})();
/* --- e8d05 --- */
/* Dove le persone cercano: typed queries + reveal; net sheet transition */
(function(){
  var reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var rows=document.getElementById('wp-rows');
  if(rows){ if(reduce||!('IntersectionObserver' in window)) rows.classList.add('is-in'); else new IntersectionObserver(function(e,o){ if(e[0].isIntersecting){ rows.classList.add('is-in'); o.disconnect(); } },{threshold:.25}).observe(rows); }
  var el=document.getElementById('wp-type');
  if(el){ var Q=['nuove costruzioni Parma','trilocale con terrazzo Monza','dove comprare casa nuova a Milano?','appartamento classe A vicino al centro'], qi=0, ci=0, del=false;
    if(reduce){ el.textContent=Q[0]; } else (function tick(){ var q=Q[qi]; if(!del){ ci++; el.textContent=q.slice(0,ci); if(ci===q.length){ del=true; return setTimeout(tick,1600); } return setTimeout(tick,55); } ci--; el.textContent=q.slice(0,ci); if(ci===0){ del=false; qi=(qi+1)%Q.length; return setTimeout(tick,300); } setTimeout(tick,22); })(); }
  var net=document.querySelector('.net_section');
  if(net&&!reduce){ var raf=0; function upd(){ raf=0; var r=net.getBoundingClientRect(), vh=window.innerHeight, p=Math.min(1,Math.max(0,(vh-r.top)/(vh*.85))); var e=1-Math.pow(1-p,3);
      net.style.setProperty('--ins',((1-e)*Math.min(48,window.innerWidth*.04)).toFixed(1)+'px'); net.style.setProperty('--rad',((1-e)*36).toFixed(1)+'px'); }
    window.addEventListener('scroll',function(){ if(!raf) raf=requestAnimationFrame(upd); },{passive:true}); window.addEventListener('resize',upd); upd(); }
})();
/* --- 6f799 --- */
/* budget: copy fixed, only the "Dopo" split breathes a little */
(function(){
  var bd=document.getElementById('rp-bd'); if(!bd) return;
  var dp=bd.querySelector('[data-b="dopo"]'), m=dp.querySelector('.m'), g=dp.querySelector('.g'), V=[58,52,46,40,33,45], k=0, vis=false;
  function bar(v){ m.style.width=v+'%'; g.style.width=(100-v)+'%'; m.textContent='Meta '+v+'%'; g.textContent='Google '+(100-v)+'%'; }
  bar(58); if(window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if('IntersectionObserver' in window) new IntersectionObserver(function(e){ vis=e[0].isIntersecting; }).observe(bd); else vis=true;
  setInterval(function(){ if(!vis||document.hidden) return; k=(k+1)%V.length; bar(V[k]); },3000);
})();
/* --- acf61 --- */
(function(){
  var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  [].forEach.call(document.querySelectorAll('[data-cmp]'), function(el){
    var rng = el.querySelector('.cmp_rng'), user = false, vis = false, t0 = performance.now();
    function set(v){ el.style.setProperty('--x', v + '%'); }
    set(50);
    rng.addEventListener('input', function(){ user = true; set(rng.value); });
    el.addEventListener('pointermove', function(e){ if (e.pointerType !== 'mouse') return; user = true; var r = el.getBoundingClientRect(); var v = Math.max(0, Math.min(100, (e.clientX - r.left) / r.width * 100)); set(v); rng.value = v; });
    if ('IntersectionObserver' in window) new IntersectionObserver(function(en){ vis = en[0].isIntersecting; }, {threshold:.2}).observe(el); else vis = true;
    if (!reduce) (function loop(t){ if (vis && !user && el.offsetWidth){ var v = 50 + 32 * Math.sin((t - t0) / 1900); set(v.toFixed(2)); rng.value = v; } requestAnimationFrame(loop); })(t0);
  });
  [].forEach.call(document.querySelectorAll('.cmp_light'), function(g){
    var host = g.closest('.hx_rd, .rpr'), cv = host && host.querySelector('canvas[data-light]');
    [].forEach.call(g.querySelectorAll('button'), function(b){
      b.addEventListener('click', function(){
        [].forEach.call(g.querySelectorAll('button'), function(o){ o.classList.toggle('is-on', o === b); });
        if (cv){ cv.dataset.scene = b.dataset.l; if (window.__lpPaint) window.__lpPaint(cv, b.dataset.l); }
      });
    });
  });
})();
/* --- e4d89 --- */
(function(){
  var root = document.getElementById('panoramica'); if (!root || !root.classList.contains('shw')) return;
  var frame = root.querySelector('.shw_frame'), crumb = frame.querySelector('[data-crumb]'), cta = frame.querySelector('[data-cta]'), nav = [].slice.call(frame.querySelectorAll('.hx_side [data-nav]')), L = {ads:['Campagne','+ Nuova campagna'], port:['Portali','+ Nuovo annuncio'], site:['Sito e landing','Pubblica modifiche'], rnd:['Render in-house','+ Nuovo render']}, wrap = root.querySelector('.hx_tabs'), tabs = [].slice.call(root.querySelectorAll('[data-sv]'));
  var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches, MS = 7000, auto = !reduce, t = null, vis = true;
  wrap.style.setProperty('--tab-dur', MS/1000 + 's'); if (!auto) wrap.classList.add('is-manual');
  function set(k){ frame.setAttribute('data-mode', k); if (crumb) crumb.textContent = L[k][0]; if (cta) cta.textContent = L[k][1]; nav.forEach(function(li){ li.classList.toggle('is-on', li.dataset.nav === k); });
    tabs.forEach(function(b){ var on = b.dataset.sv === k; b.setAttribute('aria-selected', on ? 'true' : 'false'); var bar = b.querySelector('.tab_bar'); if (bar){ bar.style.animation = 'none'; void bar.offsetWidth; bar.style.animation = ''; } });
    var pane = frame.querySelector('[data-pane="' + k + '"]');
    if (pane && window.__lpPaint) [].forEach.call(pane.querySelectorAll('canvas[data-scene]'), function(c){ window.__lpPaint(c, c.dataset.scene); });
  }
  function next(){ clearTimeout(t); if (!auto) return; t = setTimeout(function(){ if (vis && !document.hidden){ var i = tabs.findIndex(function(b){ return b.getAttribute('aria-selected') === 'true'; }); set(tabs[(i+1) % tabs.length].dataset.sv); } next(); }, MS); }
  tabs.forEach(function(b){ b.addEventListener('click', function(){ auto = false; clearTimeout(t); wrap.classList.add('is-manual'); set(b.dataset.sv); }); });
  if ('IntersectionObserver' in window) new IntersectionObserver(function(e){ vis = e[0].isIntersecting; }, {threshold:.1}).observe(frame);
  set('ads'); next();
})();
/* --- 87dc6 --- */
(function(){var reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
[].forEach.call(document.querySelectorAll('.sp_rot'),function(el){var w=[].slice.call(el.querySelectorAll('b')),i=0;if(reduce||w.length<2)return;
setInterval(function(){var n=(i+1)%w.length,o=w[i];o.classList.remove('is-on');o.classList.add('is-out');setTimeout(function(){o.classList.remove('is-out')},600);w[n].classList.add('is-on');i=n;},1800);});})();
/* --- 75e4c --- */
(function(){
  var g = document.querySelector('.pr_tg'); if (!g) return;
  var st = {who:'dev', bill:'m'};
  function upd(){ var f = (st.who === 'ag' ? .85 : 1) * (st.bill === 'y' ? .9 : 1);
    [].forEach.call(document.querySelectorAll('[data-p]'), function(b){ b.textContent = Math.round(+b.dataset.p * f).toLocaleString('it-IT') + ' €'; }); }
  [].forEach.call(g.querySelectorAll('.pr_seg'), function(seg){
    [].forEach.call(seg.querySelectorAll('button'), function(b){ b.addEventListener('click', function(){
      [].forEach.call(seg.querySelectorAll('button'), function(o){ o.classList.toggle('is-on', o === b); }); st[seg.dataset.g] = b.dataset.v; upd(); }); });
  });
})();
/* --- 28659 --- */
(function(){
  var cs=[].slice.call(document.querySelectorAll('.stk_card')); if(!cs.length) return;
  var mq=matchMedia('(max-width:760px)');
  function f(){ if(mq.matches){cs.forEach(function(c){c.style.removeProperty('--p')});return;}
    for(var i=0;i<cs.length-1;i++){var n=cs[i+1].getBoundingClientRect().top,c=cs[i].getBoundingClientRect();
      var p=Math.min(1,Math.max(0,1-(n-c.top)/Math.max(1,c.height)));cs[i].style.setProperty('--p',p.toFixed(3));}}
  var t=0; addEventListener('scroll',function(){if(!t){t=1;requestAnimationFrame(function(){t=0;f();});}},{passive:true}); addEventListener('resize',f); f();
  // deep-dive reveal
  var dd=document.querySelector('.dd_grid'); if(!dd) return;
  if(!('IntersectionObserver' in window)){dd.classList.add('is-in');return;}
  [].forEach.call(dd.querySelectorAll('.dd_c'),function(c){new IntersectionObserver(function(e,o){if(e[0].isIntersecting){c.classList.add('is-in');o.disconnect();}},{threshold:.3}).observe(c);});
})();
/* --- 95c45 --- */
(function(){
  var $=function(i){return document.getElementById(i)}; if(!$('ci-u')) return;
  function f(n){return Math.round(n).toLocaleString('it-IT')+' €'}
  function upd(){var u=+$('ci-u').value,p=+$('ci-p').value*1000,r=+$('ci-r').value,m=+$('ci-m').value,cap=u*p,mon=cap*r/100/12;
    $('ci-u-o').textContent=u;$('ci-p-o').textContent=f(p);$('ci-r-o').textContent=(''+r).replace('.',',')+'%';$('ci-m-o').textContent=m;$('ci-m2').textContent=m;
    $('ci-cap').textContent=(cap/1e6).toLocaleString('it-IT',{maximumFractionDigits:1})+' mln €';$('ci-mon').textContent=f(mon);$('ci-sav').textContent=f(mon*m);$('ci-fee').textContent=f(1290*m);
    [].forEach.call(document.querySelectorAll('.ci input'),function(i){i.style.setProperty('--p',((i.value-i.min)/(i.max-i.min)*100)+'%')});}
  [].forEach.call(document.querySelectorAll('.ci input'),function(i){i.addEventListener('input',upd)}); upd();
})();
/* --- e13f8 --- */
(function(){
    var BASE=[690,1290,2190], who='dev', bill='y', r=document.getElementById('pk-range'), out=document.getElementById('pk-val'); if(!r) return;
    var cards=[].slice.call(document.querySelectorAll('.a_pc[data-i]'));
    var STOPS=[[0,1000],[25,2000],[50,6000],[75,15000],[100,20000]];
    function budget(v){for(var i=1;i<STOPS.length;i++){if(v<=STOPS[i][0]){var a=STOPS[i-1],b=STOPS[i],t=(v-a[0])/(b[0]-a[0]);return Math.round((a[1]+(b[1]-a[1])*t)/100)*100;}}return 20000;}
    function fmt(n){return n.toLocaleString('it-IT')+' €';}
    function upd(){var v=+r.value,b=budget(v);out.textContent=v>=100?'20.000 €+':fmt(b);r.style.setProperty('--p',v+'%');
      var best=b<=2000?0:b<=6000?1:b<=15000?2:3; if(v>=100)best=3;
      cards.forEach(function(c){var i=+c.dataset.i;c.classList.toggle('is-best',i===best);
        if(i<3){var mth=BASE[i]*(who==='ag'?.85:1);mth=Math.round(mth/10)*10;var y=Math.round(mth*.9/10)*10;
          c.querySelector('.a_pk_price').textContent=fmt(bill==='y'?y:mth);
          c.querySelector('.a_pc_billed').textContent=bill==='y'?fmt(y*12)+' fatturati annualmente'+(who==='ag'?' · per mandato':''):'Fatturazione mensile'+(who==='ag'?' · per mandato':'');}});}
    r.addEventListener('input',upd);
    document.querySelectorAll('.a_pk_seg').forEach(function(s){s.querySelectorAll('[data-btn],button').forEach(function(bt){bt.addEventListener('click',function(){s.querySelectorAll('[data-btn],button').forEach(function(o){o.classList.toggle('is-on',o===bt);});if(s.dataset.seg==='who')who=bt.dataset.v;else bill=bt.dataset.v;upd();});});});
    upd();
  })();
/* --- 17be1 --- */
(function(){
  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  var el=document.getElementById('wp-type');
  if(el&&!reduce){var Q=['nuove costruzioni milano trilocale','Quali nuove costruzioni a Milano hanno il terrazzo?','appartamento classe A monza','Trilocale nuovo vicino a M5, sotto 450k?'],src=document.getElementById('wp-src'),qi=0,ci=0,dir=1;
    function step(){var q=Q[qi];ci+=dir;el.textContent=q.slice(0,ci);var d=dir>0?55+Math.random()*60:25;if(dir>0&&ci>=q.length){dir=-1;d=1800;}else if(dir<0&&ci<=0){dir=1;qi=(qi+1)%Q.length;d=400;if(src)src.textContent=qi%2?'✦':'⌕';}setTimeout(step,d);}
    el.textContent='';setTimeout(step,800);}
  [['al-contrario',.12],['md-grid',.2]].forEach(function(p){var e=document.getElementById(p[0]);if(!e)return;
    if(reduce||!('IntersectionObserver' in window)){e.classList.add('is-in');return;}
    new IntersectionObserver(function(x,o){if(x[0].isIntersecting){e.classList.add('is-in');o.disconnect();}},{threshold:p[1]}).observe(e);});
})();
})();
