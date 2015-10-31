/*
 import java.awt.KeyEventDispatcher;
 import java.awt.KeyboardFocusManager;
 import java.awt.event.KeyEvent;

 public class DJ {

 private static boolean wPressed = false;

 public static boolean isWPressed() {
 synchronized (DJ.class) {
 return wPressed;
 }
 }

 public static void main(String[] args) {
 if(DJ.isWPressed())
 System.out.println("PULSADA");
        
 KeyboardFocusManager.getCurrentKeyboardFocusManager().addKeyEventDispatcher(new KeyEventDispatcher() {

 @Override
 public boolean dispatchKeyEvent(KeyEvent ke) {
 synchronized (DJ.class) {
 switch (ke.getID()) {
 case KeyEvent.KEY_PRESSED:
 if (ke.getKeyCode() == KeyEvent.VK_W) {
 wPressed = true;
 }
 break;

 case KeyEvent.KEY_RELEASED:
 if (ke.getKeyCode() == KeyEvent.VK_W) {
 wPressed = false;
 }
 break;
 }
 return false;
 }
 }
 });
 }
 }
 */

import java.awt.event.KeyAdapter;
import java.awt.event.KeyEvent;
import javax.swing.JFrame;
import javax.swing.JTextField;
import java.io.*;

public class DJ {

    public static void main(String[] argv) throws Exception {

        JTextField textField = new JTextField();

        textField.addKeyListener(new Keychecker());

        JFrame jframe = new JFrame();

        jframe.add(textField);

        jframe.setSize(400, 350);

        jframe.setVisible(true);
        
        System.out.println("VERSION 2");

    }
}

class Keychecker extends KeyAdapter {

    @Override
    public void keyPressed(KeyEvent event) {
        FileOutputStream fos = null;
        PrintWriter pw = null;
        try
        {
            fos = new FileOutputStream("../servidor/web/dj.txt");
            pw = new PrintWriter(fos,true);

            switch (event.getKeyCode()) {
                case KeyEvent.VK_UP:
                    pw.print("1");
                    break;
                case KeyEvent.VK_DOWN:
                    pw.print("2");
                    break;
                case KeyEvent.VK_LEFT:
                    pw.print("3");
                    break;
                case KeyEvent.VK_RIGHT:
                    pw.print("4");
                    break;
                case 32:
                    pw.print("5");
                default:
                    System.out.println((int) event.getKeyCode());
            }
            
            pw.flush();
            pw.close();
            fos.close();
        }
        catch(Exception e)
        {
            e.printStackTrace();
        }
    }
}
